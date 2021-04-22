import React, { useState, useMemo } from "react";
import { formatPrice } from "common/helper";
import axios from "common/axios";
const CartItem = (props) => {
  const { id, name, image, price } = props.cart || {};
  const [mount, setMount] = useState(props.cart.mount);
  const sumPrice = useMemo(() => formatPrice(parseInt(price) * mount), [
    mount,
    price,
  ]);
  //
  const handleChanger = (e) => {
    const _mount = parseInt(e.target.value);
    setMount(_mount);
    const newCart = { ...props.cart, mount: _mount };
    axios.put(`/carts/${id}`, newCart).then((res) => {
      props.updateCart(newCart);
    });
  };
  //
  const deleteCart = (e) => {
    e.preventDefault();
    axios.delete(`/carts/${id}`).then((res) => {
      props.deleteCart(props.cart);
    });
  };
  return (
    <tr className="cart-item bg-white">
      <td className="py-3 text-center">
        <a href="#!" onClick={deleteCart}>
          <i className="fas fa-times"></i>
        </a>
      </td>
      <td className="py-3 text-center">
        <img src={image} alt="" />
      </td>
      <td className="py-3">
        <p className="h5 text-center mb-0">{name}</p>
      </td>
      <td className="text-center">
        <p className="mb-0">{formatPrice(price)}</p>
      </td>
      <td className="form-group py-3">
        <input
          type="number"
          className="form-control mx-auto"
          value={mount}
          min={1}
          onChange={handleChanger}
        />
      </td>
      <td className="py-3 text-center">
        <p className="text-danger mb-0">{sumPrice}</p>
      </td>
    </tr>
  );
};

export default CartItem;
