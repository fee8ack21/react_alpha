import React from "react";
import Header from "components/Header";

const Layout = (props) => {
  return (
    <>
      <Header nickname="User" />
      {props.children}
    </>
  );
};

export default Layout;
