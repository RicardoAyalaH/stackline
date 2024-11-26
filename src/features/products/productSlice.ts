import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchProducts } from "./productAPI";

interface Review {
  customer: string;
  review: string;
  score: number;
}

export interface Sale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Array<Review>;
  retailer: string;
  details: Array<string>;
  tags: Array<string>;
  sales: Array<Sale>;
};

export interface ProductState {
  value: Array<Product>;
  status: "idle" | "loading" | "failed";
};

const initialState: ProductState = {
  value: [],
  status: "idle",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductsThunk.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, state => {
        state.status = "failed";
      });
  },
});

export const selectProductById = (state: ProductState, id: string) => {
  return state.value.find((product: Product) => product.id === id);
};

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  async () => fetchProducts(),
);

export default productSlice.reducer;
