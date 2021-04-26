import React, { useEffect } from "react";
import Layout from "Layout";
import Products from "components/Products";
// 函式寫法
function Home(props) {
  useEffect(() => {
    props.setFooterState(true);
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
