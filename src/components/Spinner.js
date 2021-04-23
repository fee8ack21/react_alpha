import React from "react";
//
function Spinner() {
  return (
    <div
      id="spinner-wrap"
      className="d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.8)",
        zIndex: "99999",
        top: "0px",
        left: "0px",
        bottom: "0px",
        right: "0px",
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
export default Spinner;
