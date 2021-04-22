import _axios from "axios";

const axios = (baseURL) => {
  const instance = _axios.create({
    baseURL: baseURL || "http://localhost:3003",
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
