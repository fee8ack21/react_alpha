import React from "react";
import { Link, withRouter } from "react-router-dom";
import UserProfile from "components/UserProfile";
import Panel from "components/Panel";
// 類別寫法
class Header extends React.Component {
  state = {
    igURL: "https://www.instagram.com/pin_jui_huang/",
  };
  toProfile() {
    Panel.openPanel({
      component: UserProfile,
      props: {
        user: this.props.user,
      },
      callback: (data) => {
        console.log(data);
        if (data === "logout") {
          this.props.history.go(0);
        }
      },
    });
  }
  renderLink() {
    const user = this.props.user;
    if (JSON.stringify(user) !== "{}") {
      return (
        <span
          className="fs-md-rwd text-white"
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.toProfile();
          }}
        >
          {user.nickname}
        </span>
      );
    } else {
      return (
        <>
          <Link
            to="/login"
            className="fs-md-rwd text-decoration-none text-white"
          >
            Log In
          </Link>
        </>
      );
    }
  }
  render() {
    return (
      <header className="main-header bg-primary py-2">
        <div className="container">
          <div className="d-flex align-items-center">
            <div>
              <Link
                to="/"
                className="fs-md-rwd text-decoration-none text-white"
              >
                Home
              </Link>
            </div>
            <div className="d-flex align-items-center ml-auto">
              <Link
                to="line_url"
                className="text-white text-decoration-none mr-3"
                target="_blank"
              >
                <i className="fab fa-line" style={{ fontSize: "20px" }}></i>
              </Link>
              <Link
                to="/fb_url"
                className="text-white text-decoration-none mr-3"
                target="_blank"
              >
                <i
                  className="fab fa-facebook-square"
                  style={{ fontSize: "20px" }}
                ></i>
              </Link>
              <Link
                to="/ig_url"
                className="text-white text-decoration-none mr-3"
                target="_blank"
              >
                <i className="fab fa-instagram" style={{ fontSize: "20px" }}></i>
              </Link>
              {this.renderLink()}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
