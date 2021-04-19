import React from "react";
// import ReactDOM from "react-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// 類別寫法
class Login extends React.Component {
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
  }
  //
  emailRef = React.createRef();
  passwordRef = React.createRef();
  //
  state = {
    email: "",
    password: "",
  };
  //
  handleClick(msg, e) {
    e.preventDefault();
    console.log(this);
    // alert(msg);
  }
  //
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    };
    console.log(formData);
  };
  //
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //
  render() {
    return (
      <div className="login-wrap d-flex justify-content-center align-items-center">
        <Form className="border rounded px-4 py-5" onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>信箱</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="請輸入信箱"
              ref={this.emailRef}
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>密碼</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="請輸入密碼"
              ref={this.passwordRef}
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            // onClick={this.handleClick}
            onClick={this.handleClick.bind(this, "clicked")}
            // onClick={(e) => this.handleClick("click", e)}
          >
            送出
          </Button>
        </Form>
      </div>
    );
  }
}

// 函式寫法
// function Login() {
//   // 非JSX 的情況 (node ,attr ,value)
//   // return React.createElement("h1", { className: "123" }, "test");

//   return (
//     <div className="login-wrap d-flex justify-content-center align-items-center">
//       <Form className="border rounded px-4 py-5">
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>信箱</Form.Label>
//           <Form.Control type="email" placeholder="請輸入信箱" />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>密碼</Form.Label>
//           <Form.Control type="password" placeholder="請輸入密碼" />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="w-100">
//           送出
//         </Button>
//       </Form>
//     </div>
//   );
// }

export default Login;
