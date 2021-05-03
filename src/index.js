import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "common/auth";
import Footer from "components/Footer";
//
export const FooterContext = React.createContext();
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
      <FooterContext.Provider value={{ footerState, setFooterState }}>
        <App setFooterState={setFooterState} />
        <Footer footerState={footerState} />
      </FooterContext.Provider>
    </>
  );
}
ReactDOM.render(<Index />, document.getElementById("root"));
