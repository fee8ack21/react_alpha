import React, { useEffect, useContext } from "react";
import Layout from "Layout";
import Products from "components/Products";
import { FooterContext } from "../index.js";

// 函式寫法
function Home() {
  const context = useContext(FooterContext);

  useEffect(() => {
    context.setFooterState(true);
  });
  return (
    <>
      <Layout>
        <Products />
      </Layout>
    </>
  );
}

export default Home;
