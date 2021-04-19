import React from "react";
// import ReactDOM from "react-dom";
import ProductToolBox from "components/ProductToolBox";
import Product from "components/Product";
// 函式寫法
function Products() {
  return (
    <>
      <div className="container">
        <ProductToolBox />
        <div className="product-list row">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
}

export default Products;
