import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "common/axios";
import { toast } from "react-toastify";
import { Link, withRouter } from "react-router-dom";
import { FooterContext } from "../index.js";

// 類別寫法
function Login(props) {
  const context = useContext(FooterContext);

  useEffect(() => {
    context.setFooterState(false);
  });
  //
  if (global.auth.isLogin()) {
    props.history.push("/");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = async (data) => {
    //
    try {
      const { email, password } = data;
      const res = await axios.post("/auth/login", { email, password });
      const jwToken = res.data;
      global.auth.setToken(jwToken);
      //
      localStorage.setItem("store_token_id", jwToken);
      toast("Login successfully !");
      props.history.push("/");
    } catch (error) {
      const message = error.response.data;
      toast(message);
    }
  };
  return (
    <div className="login-wrap d-flex justify-content-center align-items-center">
      <form
        className="bg-white border rounded px-4 py-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group position-relative">
          <label htmlFor="" className="fs-md-rwd position-relative">
            Email
            <i className="far fa-envelope position-absolute text-secondary"></i>
          </label>
          <input
            type="text"
            name="email"
            placeholder=""
            autoComplete="chrome-off"
            className={`fs-md-rwd form-control ${errors.email && "is-invalid"}`}
            {...register("email", {
              required: true,
              pattern: /^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i,
            })}
          />
          {!!errors.email && errors.email.type === "required" ? (
            <small className="text-danger">Email is required !</small>
          ) : (
            ""
          )}
          {!!errors.email && errors.email.type === "pattern" ? (
            <small className="text-danger">Invalid email format !</small>
          ) : (
            ""
          )}
        </div>
        <div className="form-group position-relative">
          <label htmlFor="" className="fs-md-rwd position-relative">
            Password
            <i className="fas fa-lock position-absolute text-secondary"></i>
          </label>

          <input
            type="password"
            name="password"
            placeholder=""
            autoComplete="chrome-off"
            className={`fs-md-rwd form-control ${
              errors.password && "is-invalid"
            }`}
            {...register("password", { required: true, minLength: 3 })}
          />
          {!!errors.password && errors.password.type === "required" ? (
            <small className="text-danger">Password is required !</small>
          ) : (
            ""
          )}
          {!!errors.password && errors.password.type === "minLength" ? (
            <small className="text-danger">
              Can not be less than 3 digit !
            </small>
          ) : (
            ""
          )}
        </div>
        <div className="btn-wrap d-flex justify-content-between">
          <Link to="/register" className="fs-md-rwd btn btn-secondary">
            Register
          </Link>
          <button className="fs-md-rwd btn btn-primary" type="submit">
            Login
          </button>
        </div>
        <Link to="/" className="d-block text-secondary text-center mt-3">
          <small>Back to home page.</small>
        </Link>
      </form>
    </div>
  );
}

export default withRouter(Login);
