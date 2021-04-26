import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "common/auth";
import Footer from "components/Footer";
//

function Index() {
  const [footerState, setFooterState] = useState(false);
  return (
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
      <App setFooterState={setFooterState} />
      <Footer footerState={footerState} />
    </>
  );
}
ReactDOM.render(<Index />, document.getElementById("root"));
