import decode from "jwt-decode";
const JWT = "store_token_id";

const setToken = (token) => {
  localStorage.setItem(JWT, token);
};
//
const getToken = (token) => {
  return localStorage.getItem(JWT);
};
//
const isLogin = () => {
  const jwToken = getToken();
  return !!jwToken && !isTokenExpired(jwToken);
};
//
const getUser = () => {
  const jwToken = getToken();
  if (isLogin()) {
    const user = decode(jwToken);
    return user;
  } else {
    return null;
  }
};
//
const isTokenExpired = (token) => {
  try {
    const _info = decode(token);
    if (_info.exp < Date.now() / 1000) {
      console.log(123)
      localStorage.removeItem(JWT);
      return true;
    } else return false;
  } catch (error) {
    return false;
  }
};
//
const logout = () => {
  localStorage.removeItem(JWT);
};
//
global.auth = {
  setToken,
  getUser,
  isTokenExpired,
  logout,
  isLogin,
  getToken,
};
