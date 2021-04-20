import React from "react";
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
// 類別寫法
class Header extends React.Component {
  renderLink() {
    const nickname = this.props.nickname;
    if (nickname) {
      return (
        <span className="text-white">
          <i className="far fa-user mr-2"></i>
          {this.props.nickname}
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

// 函式寫法
// function Header(props) {
//   return (
//     <header className="bg-dark py-2">
//       <div className="container">
//         <div className="d-flex">
//           <div>
//             <a href="/" className="text-decoration-none text-white">
//               Home
//             </a>
//           </div>
//           <div className="ml-auto">
//             <a href="/login" className="text-decoration-none text-white mr-4">
//               {props.nickname ? props.nickname : "Login"}
//             </a>
//             <a href="/register" className="text-decoration-none text-white">
//               Register
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

export default Header;
