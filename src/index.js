import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "common/auth";
import MessengerCustomerChat from "react-messenger-customer-chat";
//
ReactDOM.render(
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <App />
    <MessengerCustomerChat
      pageId="104903445063158"
      appId="366104244735566"
      htmlRef={window.location.pathname}
    />
  </>,
  document.getElementById("root")
);
