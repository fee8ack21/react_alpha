import React, { useEffect, useContext } from "react";
import Layout from "Layout";
import { FooterContext } from "../index.js";
const NotFound = () => {
  const context = useContext(FooterContext);

  useEffect(() => {
    context.setFooterState(true);
  });
  return (
    <>
      <Layout>
        <div className="not-found-wrap d-flex justify-content-center align-items-center">
          <p className="font-weight-bold">Not Found</p>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
