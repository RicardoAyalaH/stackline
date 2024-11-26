import React from "react";

import { Sale } from "../../../features/products/productSlice";

interface TableProps {
  sales: Array<Sale>;
};

export const Table: React.FC<TableProps> = ({ sales }) => {
  console.log("table");
  console.log(sales);
  return (
    <div>table</div>
  );
};