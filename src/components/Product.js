import React from "react";
import { formatPrice } from "common/helper";
import Panel from "components/Panel";
import EditInventory from "./EditInventory";
class Product extends React.Component {
  state = {
    imgState: false,
  };
  toEdit = () => {
    Panel.openPanel({
      component: EditInventory,
      callback: (data) => {
        console.log(data);
      },
    });
  };
  //
  leaveChangeImg = () => {
    this.setState({ imgState: false });
  };
  enterChangeImg = () => {
    this.setState({ imgState: true });
  };

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
            <button
              className="edit-btn btn btn-light d-flex justify-content-center align-items-center position-absolute rounded-circle"
              onClick={this.toEdit}
            >
              <i class="fas fa-list"></i>
            </button>
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
export default Product;
