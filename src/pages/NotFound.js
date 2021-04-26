import React, { useEffect } from "react";
import Layout from "Layout";
const NotFound = (props) => {
  useEffect(() => {
    props.setFooterState(true);
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
