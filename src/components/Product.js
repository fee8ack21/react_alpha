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
    if (!global.auth.isLogin()) {
      this.props.history.push("/login");
      toast("Please login to continue!");
      return;
    }
    //
    Panel.openPanel({
      component: EditInventory,
      props: {
        product: this.props.product,
        delete: this.props.delete,
      },
      callback: (data) => {
        // console.log(data);
        if (data !== undefined && "id" in data) {
          this.props.update(data);
        }
      },
    });
  };
  //
  addToCart = async () => {
    if (!global.auth.isLogin()) {
      this.props.history.push("/login");
      toast("Please login to continue!");
      return;
    }
    try {
      const user = global.auth.getUser() || {};
      const { id, name, image1, price } = this.props.product;
      const res = await axios.get(`/carts?productId=${id}`);
      const carts = res.data;
      console.log(carts);
      if (carts && carts.length > 0) {
        if (carts[0].userId === user.email) {
          const cart = carts[0];
          cart.mount += 1;
          await axios.put(`/carts/${cart.id}`, cart);
        }
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
      toast("Added to cart successfully!");
      this.props.updateCartNum();
    } catch (error) {
      console.log(error);
      toast("Add to cart failed!");
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
          className="edit-btn fs-md-rwd btn btn-light d-flex justify-content-center align-items-center position-absolute rounded-circle"
          onClick={this.toEdit}
        >
          <i className="fas fa-list"></i>
        </button>
      );
    }
  };
  //
  render() {
    const {
      name,
      image1,
      image2,
      color,
      price,
      status,
      time,
    } = this.props.product;

    return (
      <div className="product col-6 col-md-4 col-xl-3 mb-3">
        <div className="bg-white rounded p-3">
          <div className="position-relative">
            <figure className="position-relative rounded">
              {status === "available" ? (
                ""
              ) : (
                <div className="no-stock-layer position-absolute d-flex justify-content-center align-items-center">
                  <span className="fs-lg-rwd text-danger font-weight-bold font-italic">
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
            <p className="fs-sm-rwd  text-center text-md-left text-secondary font-italic mb-0">
              {color.length + " Colors"}
            </p>
            <p className="fs-md-rwd text-center text-md-left">{name}</p>
          </div>
          <div className="d-none d-md-block">
            <p className="fs-sm-rwd text-center text-md-left text-secondary font-italic mb-0">
              {time}
            </p>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="fs-md-rwd mb-2 mb-md-0">{formatPrice(price)}</p>
            <button
              className={`add-to-cart-btn fs-md-rwd btn d-flex justify-content-center align-items-center bg-info rounded-circle ${
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
