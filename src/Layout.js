import React, { useMemo } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Messenger from "components/Messenger";
const Layout = (props) => {
  const user = useMemo(() => {
    return global.auth.getUser() || {};
  }, []);
  return (
    <>
      <Header user={user} />
      {props.children}
      <Footer />
      <Messenger />
    </>
  );
};

export default Layout;
