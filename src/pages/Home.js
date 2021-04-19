import React from "react";
import Header from "components/Header";
import Products from "components/Products";
// 函式寫法
function Home() {
  // 非JSX 的情況 (node ,attr ,value)
  // return React.createElement("h1", { className: "123" }, "test");

  return (
    <>
      <Header nickname="用戶" />
      <Products />
    </>
  );
}

export default Home;
