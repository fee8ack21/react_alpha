import React from "react";
import { Link, withRouter } from "react-router-dom";
import UserProfile from "components/UserProfile";
import Panel from "components/Panel";
// 類別寫法
class Header extends React.Component {
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
          className="text-white"
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.toProfile();
          }}
        >
          <i className="far fa-user mr-2"></i>
          {user.nickname}
        </span>
      );
    } else {
      return (
        <>
          <Link to="/login" className="text-decoration-none text-white mr-4">
            Login
          </Link>
          <Link to="/register" className="text-decoration-none text-white">
            Register
          </Link>
        </>
      );
    }
  }
  render() {
    return (
      <header className="bg-primary py-2">
        <div className="container">
          <div className="d-flex">
            <div>
              <Link to="/" className="text-decoration-none text-white">
                Home
              </Link>
            </div>
            <div className="ml-auto">{this.renderLink()}</div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
