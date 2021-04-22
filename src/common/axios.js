import _axios from "axios";
require("dotenv").config();

const axios = (baseURL) => {
  // const devUrl =
  //   window.location.host === "react-udemy-alpha.herokuapp.com"
  //     ? "https://react-udemy-alpha-api.herokuapp.com"
  //     : "http://localhost:3003";
  const instance = _axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3003",
    timeout: 0,
  });
  instance.interceptors.request.use(
    (config) => {
      const jwToken = global.auth.getToken();
      config.headers["Authorization"] = "Bearer " + jwToken;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
};

export { axios };
export default axios();
