import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "common/axios";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
function Register(props) {
  //
  useEffect(() => {
    props.setFooterState(false);
  });
  if (global.auth.isLogin()) {
    props.history.push("/");
  }
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = async (data) => {
    //
    try {
      const { nickname, email, password } = data;
      const res = await axios.post("/auth/register", {
        nickname,
        email,
        password,
        type: 0,
      });
      const jwToken = res.data;
      global.auth.setToken(jwToken);
      //
      localStorage.setItem("store_token_id", jwToken);
      toast("Register successfully !");
      props.history.push("/");
    } catch (error) {
      const message = error.response.data;
      toast(message);
    }
  };
  return (
    <div className="register-wrap d-flex justify-content-center align-items-center">
      <form
        className="bg-white border rounded px-4 py-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <label htmlFor="" className="fs-md-rwd position-relative">
            Nickname
            <i className="far fa-user position-absolute text-secondary"></i>
          </label>
          <input
            type="text"
            name="nickname"
            autoComplete="chrome-off"
            className={`fs-md-rwd form-control ${
              errors.nickname && "is-invalid"
            }`}
            {...register("nickname", {
              required: true,
            })}
          />
          {!!errors.nickname && errors.nickname.type === "required" ? (
            <small className="text-danger">Nickname is required !</small>
          ) : (
            ""
          )}
        </div>
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
          <Link to="/login" className="fs-md-rwd btn btn-secondary">
            Login
          </Link>
          <button className="fs-md-rwd btn btn-primary" type="submit">
            Register
          </button>
        </div>
        <Link to="/" className="d-block text-secondary text-center mt-3">
          <small>Back to home page.</small>
        </Link>
      </form>
    </div>
  );
}

export default withRouter(Register);
