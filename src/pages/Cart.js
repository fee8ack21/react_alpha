import React, { useState, useEffect, useMemo } from "react";
import Layout from "Layout";
import CartItem from "components/CartItem";
import axios from "common/axios";
import { formatPrice } from "common/helper";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "components/Spinner";

const Cart = (props) => {
  if (!global.auth.isLogin()) {
    props.history.push("/login");
  }
  const [carts, setCarts] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  //
  useEffect(() => {
    props.setFooterState(true);
    const user = global.auth.getUser() || {};

    axios
      .get(`/carts?userId=${user.email}`)
      .then((res) => {
        setCarts(res.data);
      })
      .finally(() => {
        setLoadingState(true);
      });
  }, []);
  //
  const totalPrice = useMemo(() => {
    const totalPrice = carts
      .map((cart) => cart.mount * parseInt(cart.price))
      .reduce((a, value) => a + value, 0);
    return formatPrice(totalPrice);
  }, [carts]);
  //
  const updateCart = (cart) => {
    const newCarts = [...carts];
    const _index = newCarts.findIndex((item) => item.id === cart.id);
    newCarts.splice(_index, 1, cart);
    setCarts(newCarts);
  };
  const deleteCart = (cart) => {
    const _carts = carts.filter((item) => item.id !== cart.id);
    setCarts(_carts);
  };
  return (
    <>
      {!loadingState && <Spinner />}
      <Layout>
        <div className="cart-wrap container">
          <div className="py-3 border-bottom border-primary">
            <h3 className="fs-lg-rwd mb-1">Cart</h3>
          </div>
          <div className="cart-item-wrap">
            <div className="py-3">
              <div
                style={{
                  overflowX: "scroll",
                }}
              >
                <table style={{ minWidth: "100%" }}>
                  <thead>
                    <tr className="border-bottom border-primary">
                      <th className="fs-md-rwd td-sm-width text-center pb-3 px-4">
                        #
                      </th>
                      <th className="fs-md-rwd td-md-width text-center pb-3">
                        Image
                      </th>
                      <th className="fs-md-rwd td-lg-width text-center pb-3">
                        Name
                      </th>
                      <th className="fs-md-rwd td-md-width text-center pb-3">
                        Price
                      </th>
                      <th className="fs-md-rwd td-md-width text-center pb-3">
                        Amount
                      </th>
                      <th className="fs-md-rwd td-md-width text-center pb-3 px-5">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <TransitionGroup component={null}>
                      {carts.map((cart) => (
                        <CSSTransition
                          classNames="cart-item-fade"
                          timeout={{ enter: 200, exit: 200 }}
                          key={cart.id}
                        >
                          <CartItem
                            key={cart.id}
                            cart={cart}
                            updateCart={updateCart}
                            deleteCart={deleteCart}
                          />
                        </CSSTransition>
                      ))}
                    </TransitionGroup>
                    {/*  */}
                    {carts.length === 0 ? (
                      <CSSTransition
                        classNames="cart-item-fade"
                        timeout={{ enter: 200, exit: 200 }}
                      >
                        <tr
                          className="text-center text-secondary bg-white font-weight-bold"
                          style={{ height: "93px" }}
                        >
                          <td className="mb-0 font-italic" colSpan={6}>
                            <span
                              className="fs-md-rwd position-fixed"
                              style={{
                                top: "196px",
                                left: "50%",
                                transform: "translate(-50%)",
                              }}
                            >
                              No Goods
                            </span>
                          </td>
                        </tr>
                      </CSSTransition>
                    ) : (
                      <></>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div>
              <p className="sum-price font-weight-bold">
                Total：
                <span className="text-danger font-italic">{totalPrice}</span>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
