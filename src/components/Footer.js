import React, { useState, useEffect } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";

function Footer(props) {
  const [ifShow, setIfShow] = useState(false);
  const history = useHistory();
  //
  const whetherShow = () => {
    if (window.location.pathname === "/" || window.location.pathname === "/cart") {
      setIfShow(true);
    } else {
      setIfShow(false);
    }
  };
  useEffect(() => {
    whetherShow();
  }, []);

  return (
    <footer className={`main-footer container ${ifShow ? "" : "d-none"}`}>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center border-top border-primary py-3">
        <div className="fb-fanspage-wrap d-flex">
          <div
            className="fb-page mb-3 mb-md-0 mr-3 mx-auto"
            data-href="https://www.facebook.com/104903445063158"
            data-tabs="timeline"
            data-width="380"
            data-height="130"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
          >
            <blockquote
              cite="https://www.facebook.com/104903445063158"
              className="fb-xfbml-parse-ignore"
            >
              <a
                href="https://www.facebook.com/104903445063158"
                style={{ color: "transparent" }}
              >
                黃品睿
              </a>
            </blockquote>
          </div>
        </div>

        <div className="store-info-wrap d-flex flex-column justify-content-center align-items-center">
          <p className="mb-0" style={{ fontSize: "14px" }}>
            Phone：0976-904-299
          </p>
          <p className="mb-0" style={{ fontSize: "14px" }}>
            Email：fee8ack21@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
