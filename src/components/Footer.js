import React from "react";

function Footer() {
  return (
    <footer className="container">
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center border-top border-primary py-3 ">
        <div
          style={{ width: "380px" }}
          className="fb-page mb-3 mb-md-0 mr-3"
          data-href="https://www.facebook.com/104903445063158"
          data-tabs="timeline"
          data-width="380"
          data-height="130"
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
        <div className="d-flex flex-column justify-content-center ml-3">
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
