import React from "react";
import Layout from "Layout";
import Products from "components/Products";
// 函式寫法
function Home() {
  // 非JSX 的情況 (node ,attr ,value)
  // return React.createElement("h1", { className: "123" }, "test");

  return (
    <>
      <Layout>
        <Products />
      </Layout>
    </>
  );
}

export default Home;
