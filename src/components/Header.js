import React from "react";
// import ReactDOM from "react-dom";s
// 類別寫法
class Header extends React.Component {
  renderLink() {
    const nickname = this.props.nickname;
    if (nickname) {
      return (
        <span className="text-white">
          <i class="far fa-user mr-2"></i>
          {this.props.nickname}
        </span>
      );
    } else {
      return (
        <>
          <a href="/login" className="text-decoration-none text-white mr-4">
            登入
          </a>
          <a href="/register" className="text-decoration-none text-white">
            註冊
          </a>
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
              <a href="/" className="text-decoration-none text-white">
                首頁
              </a>
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
