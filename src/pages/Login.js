import React from "react";
import { useForm } from "react-hook-form";
// 類別寫法
export default function Login(props) {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="login-wrap d-flex justify-content-center align-items-center">
      <form
        className="bg-white border rounded px-4 py-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group position-relative">
          <label htmlFor="" className="position-relative">
            Email
            <i
              className="far fa-envelope position-absolute text-secondary"
              style={{ fontSize: "20px", left: "10px", bottom: "-38px" }}
            ></i>
          </label>
          <input
            type="text"
            name="email"
            placeholder=""
            autoComplete="chrome-off"
            className={`form-control ${errors.email && "is-invalid"}`}
            style={{ paddingLeft: "40px" }}
            {...register("email", {
              required: true,
              pattern: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
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
          <label htmlFor="" className="position-relative">
            Password
            <i
              className="fas fa-lock position-absolute text-secondary"
              style={{ fontSize: "20px", left: "10px", bottom: "-38px" }}
            ></i>
          </label>

          <input
            type="password"
            name="password"
            placeholder=""
            autoComplete="chrome-off"
            className={`form-control ${errors.password && "is-invalid"}`}
            style={{ paddingLeft: "40px" }}
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
        <div>
          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
