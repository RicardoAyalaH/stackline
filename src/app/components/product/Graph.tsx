import React from "react";
import { LineChart } from '@mui/x-charts';

import { Sale } from "../../../features/products/productSlice";
import './css/graph.css';

interface GraphProps {
  sales: Array<Sale>
};

export const Graph: React.FC<GraphProps> = ({ sales }) => {
  const mappedSales: Array<number> = new Array(12);
  sales.forEach(sale => {
    const month = new Date(sale.weekEnding).getMonth();
    mappedSales[month] =
      isNaN(mappedSales[month]) ?
        sale.retailSales :
        mappedSales[month] + sale.retailSales;
  })
  
  return (
    <div className="graph">
      Retail Sales
      <LineChart
        sx={{padding:'7px'}}
        series={[
          {
            data: mappedSales,
          },
        ]}
        height={300}
        xAxis={[
          {
            scaleType: 'band',
            data: [
              "JAN",
              "FEB",
              "MAR",
              "APR",
              "MAY",
              "JUN",
              "JUL",
              "AUG",
              "SEP",
              "OCT",
              "NOV",
              "DEC"
            ]
          },
        ]}
      />
    </div>
  )
};