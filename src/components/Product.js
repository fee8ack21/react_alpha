import React from "react";
import axios from "common/axios";
import { withRouter } from "react-router-dom";
import { formatPrice } from "common/helper";
import { toast } from "react-toastify";
import Panel from "components/Panel";
import EditInventory from "./EditInventory";
class Product extends React.Component {
  state = {
    imgState: false,
  };
  toEdit = () => {
    Panel.openPanel({
      component: EditInventory,
      props: {
        product: this.props.product,
        delete: this.props.delete,
      },
      callback: (data) => {
        // console.log(data);
        if (data) {
          this.props.update(data);
        }
      },
    });
  };
  //
  addToCart = async () => {
    if (!global.auth.isLogin()) {
      this.props.history.push("/login");
      toast.dark("Please login first !");
      return;
    }
    try {
      const user = global.auth.getUser() || {};
      const { id, name, image1, price } = this.props.product;
      const res = await axios.get(`/carts?productId=${id}`);
      const carts = res.data;
      console.log(carts);
      if (carts && carts.length > 0) {
        const cart = carts[0];
        cart.mount += 1;
        await axios.put(`/carts/${cart.id}`, cart);
      } else {
        const cart = {
          productId: id,
          name,
          image: image1,
          price,
          mount: 1,
          userId: user.email,
        };
        await axios.post("/carts", cart).then((res) => {
          // console.log(res.data);
        });
      }
      //
      toast.dark("Add Cart Success !");
      this.props.updateCartNum();
    } catch (error) {
      console.log(error);
      toast.error("Add Cart Failed !");
    }
  };
  //
  leaveChangeImg = () => {
    this.setState({ imgState: false });
  };
  enterChangeImg = () => {
    this.setState({ imgState: true });
  };
  //
  renderManagerBtn = () => {
    const user = global.auth.getUser() || {};
    if (user.type === 1) {
      return (
        <button
          className="edit-btn btn btn-light d-flex justify-content-center align-items-center position-absolute rounded-circle"
          onClick={this.toEdit}
        >
          <i className="fas fa-list"></i>
        </button>
      );
    }
  };
  //
  render() {
    const { name, image1, image2, tags, price, status } = this.props.product;

    return (
      <div className="product col-6 col-md-4 col-xl-3 mb-3">
        <div className="bg-white rounded p-3">
          <div className="position-relative">
            <figure className="position-relative rounded">
              {status === "available" ? (
                ""
              ) : (
                <div className="no-stock-layer position-absolute d-flex justify-content-center align-items-center">
                  <span className="text-danger font-weight-bold font-italic">
                    OuT oF sToCk
                  </span>
                </div>
              )}
              <img
                className="rounded"
                src={this.state.imgState ? image2 : image1}
                alt=""
                onMouseEnter={this.enterChangeImg}
                onMouseLeave={this.leaveChangeImg}
              />
            </figure>
            {this.renderManagerBtn()}
          </div>
          <div className="product-info">
            <small className="text-secondary font-italic">{tags}</small>
            <p>{name}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">{formatPrice(price)}</p>
            <button
              className={`add-to-cart-btn btn d-flex justify-content-center align-items-center bg-info rounded-circle ${
                status === "available" ? "" : "disabled"
              }`}
              disabled={status === "available" ? "" : "disabled"}
              onClick={this.addToCart}
            >
              {status === "available" ? (
                <i className="fas fa-shopping-cart"></i>
              ) : (
                <i className="fas fa-exclamation"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Product);
