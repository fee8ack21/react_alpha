import React, { useMemo } from "react";
import Header from "components/Header";

const Layout = (props) => {
  const user = useMemo(() => {
    return global.auth.getUser() || {};
  }, []);
  return (
    <>
      <Header user={user} />
      {props.children}
    </>
  );
};

export default Layout;
