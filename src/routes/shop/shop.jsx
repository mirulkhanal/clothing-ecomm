import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
