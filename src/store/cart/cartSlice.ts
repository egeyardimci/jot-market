import { createSlice } from "@reduxjs/toolkit";
import type { MarketItem } from "../market/marketSlice";

export interface CartItem {
  item: MarketItem;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.item.slug === item.slug);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ item, quantity: 1 });
      }
      state.totalAmount += item.price;
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.item.slug === item.slug);
      if (existingItem) {
        state.totalAmount -= item.price;
        existingItem.quantity -= 1;
      }
      if(existingItem?.quantity === 0) {
        state.items = state.items.filter((i) => i.item.slug !== item.slug);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
