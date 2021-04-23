import React from "react";
import { render } from "react-dom";

function Spinner() {
  return (
    <div
      id="spinner-wrap"
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.8)",
        zIndex: "99999",
        top: "0px",
        left: "0px",
      }}
    >
      <div
        className="spinner-border text-secondary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

const _div = document.createElement("div");
document.body.appendChild(_div);
const _spinner = render(<Spinner />, _div);

export default _spinner;
