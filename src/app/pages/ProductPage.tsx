import { NavBar } from "../components/common/NavBar";
import { Info as ProductInfo } from "../components/product/Info";
import { Table as ProductTable } from "../components/product/Table";
import { Graph as ProductGraph } from "../components/product/Graph";
import { useAppSelector } from "../hooks";
import { selectProductById } from "../../features/products/productSlice";
import './css/productPage.css';

export const ProductPage = () => {
  const product = useAppSelector(state => selectProductById(state, "B007TIE0GQ"));
  console.log(product);
  
  return (
    <div className="container">
      <NavBar />

      <div className="productComponents">
        {
          product &&
            <ProductInfo
              title={product.title}
              image={product.image}
              subtitle={product.subtitle}
              tags={product.tags}
            />
        }

        <div className="graph">
          {product && <ProductGraph sales={product.sales} />}
        </div>
      </div>
    </div>
  );
};