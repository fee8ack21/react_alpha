import React from "react";
import {
  Switch,
  Route,
  // Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import Cart from "pages/Cart";
import NotFound from "pages/NotFound";
//
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route
        path="/ig_url"
        component={() => {
          window.location.href = "https://www.instagram.com/pin_jui_huang/";
          return null;
        }}
      ></Route>
      <Route
        path="/fb_url"
        component={() => {
          window.location.href =
            "https://www.facebook.com/%E9%BB%83%E5%93%81%E7%9D%BF-Pin-Jui-104903445063158";
          return null;
        }}
      ></Route>
      <Route
        path="/line_url"
        component={() => {
          window.location.href = "https://line.me/ti/p/Z_V4wL67B9";
          return null;
        }}
      ></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
