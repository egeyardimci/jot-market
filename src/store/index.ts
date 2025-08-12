import { configureStore } from "@reduxjs/toolkit";
import marketSlice from "./market/marketSlice";
import cartSlice from "./cart/cartSlice";
import modalsSlice from "./modals/modalsSlice";

export const store = configureStore({
  reducer: {
    market: marketSlice,
    cart: cartSlice,
    modals: modalsSlice 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
