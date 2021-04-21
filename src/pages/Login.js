import React from "react";
// import ReactDOM from "react-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// 類別寫法
const Login = () => {
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    };
    console.log(formData);
  };
  return (
    <div className="login-wrap d-flex justify-content-center align-items-center">
      <Form
        className="bg-white border rounded px-4 py-5"
        onSubmit={this.handleSubmit}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder=""
            ref={this.emailRef}
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder=""
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
          // onClick={this.handleClick.bind(this, "clicked")}
          // onClick={(e) => this.handleClick("click", e)}
        >
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Login;
