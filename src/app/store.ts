import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: productReducer,
});

// Infer the type of `store`
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
