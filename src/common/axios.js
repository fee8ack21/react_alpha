import _axios from "axios";

const axios = (baseURL) => {
  const devUrl =
    window.location.host === "react-udemy-alpha.herokuapp.com"
      ? "https://react-udemy-alpha-api.herokuapp.com"
      : "http://localhost:3003";
  const instance = _axios.create({
    baseURL: baseURL || devUrl,
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
