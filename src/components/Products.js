import React from "react";
// import ReactDOM from "react-dom";
import ProductToolBox from "components/ProductToolBox";
import Product from "components/Product";
import { NavItem } from "react-bootstrap";
// 函式寫法
function Products() {
  const product = [
    {
      id: "1",
      name: "air Jordan 4",
      price: "1234",
      tags: "test",
      image: "images/1.jpeg",
      available: true,
    },
    {
      id: "2",
      name: "air Jordan 4",
      price: "1214",
      tags: "test",
      image: "images/1.jpeg",
      available: false,
    },
  ];
  return (
    <>
      <div className="container">
        <ProductToolBox />
        <div className="product-list row mt-3">
          {/* <Product product={product} /> */}
          {product.map((item) => {
            return <Product product={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
