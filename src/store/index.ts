import { configureStore } from "@reduxjs/toolkit";
import marketSlice from "./market/marketSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    market: marketSlice,
    cart: cartSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
