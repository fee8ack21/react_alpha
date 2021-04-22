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
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
