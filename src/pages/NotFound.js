import React from "react";
import Header from "components/Header";

const NotFound = () => (
  <>
    <Header nickname="User" />
    <div className="not-found-wrap d-flex justify-content-center align-items-center">
      <p className="display-3 font-weight-bold">Not Found</p>
    </div>
  </>
);

export default NotFound;
