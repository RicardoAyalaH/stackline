import { useEffect } from "react";

import { ProductPage } from "./app/pages/ProductPage";
import { useAppDispatch } from "./app/hooks";
import { fetchProductsThunk } from "./features/products/productSlice";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  });
  
  return (
    <ProductPage />
  );
};