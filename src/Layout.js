import React, { useMemo, useEffect, useContext } from "react";
import Header from "components/Header";
import { FooterContext } from "./index.js";

const Layout = (props) => {
  const context = useContext(FooterContext);

  useEffect(() => {
    context.setFooterState(true);
  });

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
