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

interface MarketState {
  items: MarketItem[];
  page: number;
  pageSize: number;
  brands: FilterOptionType[];
  selectedBrands: string[];
  tags: FilterOptionType[];
  selectedTags: string[];
  itemTypes: string[];
  selectedItemType: string | null;
  sortingType: string;
}

const initialState: MarketState = {
  items: [],
  page: 1,
  pageSize: 52,
  brands: [],
  selectedBrands: [],
  tags: [],
  selectedTags: [],
  itemTypes: [],
  selectedItemType: null,
  sortingType: sortingTypes.PRICE_LOW_TO_HIGH.id,
};

export const fetchMarketItems = createAsyncThunk(
  "market/fetchItems",
  async () => {
    const response = await fetch("/items.json");
    return (await response.json()) as MarketItem[];
  }
);

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    setSortingType: (state, action) => {
      state.sortingType = action.payload;
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
    },
    setItemType: (state, action) => {
      state.selectedItemType = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarketItems.fulfilled, (state, action) => {
      state.items = action.payload;
      
      // Count brands
      const brandCounts = new Map<string, number>();
      action.payload.forEach(item => {
        if (item.manufacturer) {
          brandCounts.set(item.manufacturer, (brandCounts.get(item.manufacturer) || 0) + 1);
        }
      });
      state.brands = Array.from(brandCounts.entries())
        .map(([id, count]) => ({ id, count }))
        .sort((a, b) => a.id.localeCompare(b.id)); // Sort by brand name
      
      // Count tags
      const tagCounts = new Map<string, number>();
      action.payload.forEach(item => {
        item.tags.forEach(tag => {
          tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
        });
      });
      state.tags = Array.from(tagCounts.entries())
        .map(([id, count]) => ({ id, count }))
        .sort((a, b) => a.id.localeCompare(b.id)); // Sort by tag name
      
      // Extract unique item types
      const itemTypesSet = new Set<string>();
      action.payload.forEach(item => {
        if (item.itemType) {
          itemTypesSet.add(item.itemType);
        }
      });
      state.itemTypes = Array.from(itemTypesSet).sort();
      state.selectedItemType = state.itemTypes.length > 0 ? state.itemTypes[0] : null;
    });
  }
});

export const { toggleOption, setItemType, setSortingType } = marketSlice.actions;
export default marketSlice.reducer;