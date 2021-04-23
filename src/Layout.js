import React, { useMemo } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

// import Messenger from "components/Messenger";
const Layout = (props) => {
  const user = useMemo(() => {
    return global.auth.getUser() || {};
  }, []);
  return (
    <>
      <Header user={user} />
      {props.children}
      <Footer />
      <MessengerCustomerChat
        pageId="104903445063158"
        appId="366104244735566"
        htmlRef={window.location.pathname}
      />
    </>
  );
};

export default Layout;
