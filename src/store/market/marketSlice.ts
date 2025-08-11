import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sortingTypes } from "./sortingTypes";

export interface MarketItem {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
}

export interface FilterOptionType {
  id: string;
  count: number;
}

export interface FilterOptionByItemType {
  [key: string]: FilterOptionType[];
}

interface MarketState {
  items: MarketItem[];
  page: number;
  pageSize: number;
  brands: FilterOptionByItemType;
  selectedBrands: string[];
  tags: FilterOptionByItemType;
  selectedTags: string[];
  itemTypes: string[];
  selectedItemType: string | null;
  sortingType: string;
  filteredItems: MarketItem[];
}

const initialState: MarketState = {
  items: [],
  page: 1,
  pageSize: 52,
  brands: {},
  selectedBrands: [],
  tags: {},
  selectedTags: [],
  itemTypes: [],
  selectedItemType: null,
  sortingType: sortingTypes.PRICE_LOW_TO_HIGH.id,
  filteredItems : []
};

export const fetchMarketItems = createAsyncThunk(
  "market/fetchItems",
  async () => {
    const response = await fetch("/items.json");
    return (await response.json()) as MarketItem[];
  }
);

const filterAndSortItems = (state: MarketState): MarketItem[] => {
  let filtered = [...state.items];
  
  // Filter by selected brands
  if (state.selectedBrands.length > 0) {
    filtered = filtered.filter(item => 
      state.selectedBrands.includes(item.manufacturer)
    );
  }
  
  // Filter by selected tags
  if (state.selectedTags.length > 0) {
    filtered = filtered.filter(item => 
      item.tags.some(tag => state.selectedTags.includes(tag))
    );
  }
  
  // Filter by item type
  if (state.selectedItemType) {
    filtered = filtered.filter(item => 
      item.itemType === state.selectedItemType
    );
  }
  
  // Sort items
  switch (state.sortingType) {
    case sortingTypes.PRICE_LOW_TO_HIGH.id:
      filtered.sort((a, b) => a.price - b.price);
      break;
    case sortingTypes.PRICE_HIGH_TO_LOW.id:
      filtered.sort((a, b) => b.price - a.price);
      break;
    case sortingTypes.NEWEST_FIRST.id:
      filtered.sort((a, b) => b.added - a.added);
      break;
    case sortingTypes.OLDEST_FIRST.id:
      filtered.sort((a, b) => a.added - b.added);
      break;
  }
  
  return filtered;
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setSortingType: (state, action) => {
      state.sortingType = action.payload;
      state.filteredItems = filterAndSortItems(state);
    },
    toggleOption: (state, action) => {
      const {type, payload} = action.payload;
      switch (type){
        case "brands":
          if (state.selectedBrands.includes(payload)) {
            state.selectedBrands = state.selectedBrands.filter(b => b !== payload);
          } else {
            state.selectedBrands.push(payload);
          }
          break;
        case "tags":
          if (state.selectedTags.includes(payload)) {
            state.selectedTags = state.selectedTags.filter(t => t !== payload);
          } else {
            state.selectedTags.push(payload);
          }
          break;
      }
      state.filteredItems = filterAndSortItems(state);
    },
    setItemType: (state, action) => {
      state.selectedItemType = action.payload;
      state.filteredItems = filterAndSortItems(state);
    },
    setPage : (state, action) => {
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarketItems.fulfilled, (state, action) => {
      state.items = action.payload;
      
      // Extract unique item types
      const itemTypesSet = new Set<string>();
      action.payload.forEach(item => {
        if (item.itemType) {
          itemTypesSet.add(item.itemType);
        }
      });
      state.itemTypes = Array.from(itemTypesSet).sort();
      
      // Count tags
      const tagCounts = new Map<string, Map<string, number>>();
      action.payload.forEach(item => {
        item.tags.forEach(tag => {
          if (!tagCounts.has(item.itemType)) {
            tagCounts.set(item.itemType, new Map<string, number>());
          }
          tagCounts.get(item.itemType)!.set(tag, (tagCounts.get(item.itemType)!.get(tag) || 0) + 1);
        });
      });
      itemTypesSet.forEach(type => {
        state.tags[type] = Array.from(tagCounts.get(type)?.entries() || [])
          .map(([id, count]) => ({ id, count }))
          .sort((a, b) => a.id.localeCompare(b.id)); // Sort by tag name
      });

      // Count brands
      const brandCounts = new Map<string, Map<string, number>>();
      action.payload.forEach(item => {
        if (brandCounts.has(item.itemType)) {
          brandCounts.get(item.itemType)!.set(item.manufacturer, (brandCounts.get(item.itemType)!.get(item.manufacturer) || 0) + 1);
        }
        else{
          brandCounts.set(item.itemType, new Map<string, number>());
          brandCounts.get(item.itemType)!.set(item.manufacturer, 1);
        }
      });

      itemTypesSet.forEach(type => {
        state.brands[type] = Array.from(brandCounts.get(type)?.entries() || [])
          .map(([id, count]) => ({ id, count }))
          .sort((a, b) => a.id.localeCompare(b.id)); // Sort by brand name
      });

      state.selectedItemType = state.itemTypes.length > 0 ? state.itemTypes[0] : null;

      state.filteredItems = filterAndSortItems(state);
    });
  }
});

export const { toggleOption, setItemType, setSortingType, setPage } = marketSlice.actions;
export default marketSlice.reducer;