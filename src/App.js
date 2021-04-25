import React from "react";
import "scss/app.scss";
import Router from "Router";
import MessengerCustomerChat from "react-messenger-customer-chat";
//
class App extends React.Component {
  render() {
    return (
      <>
        <Router />
        <MessengerCustomerChat
          pageId="104903445063158"
          appId="366104244735566"
          // htmlRef={window.location.pathname}
        />
      </>
    );
  }
}
// 
export default App;
