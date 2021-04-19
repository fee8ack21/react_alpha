import React from "react";
import { formatPrice } from "common/helper";
class Product extends React.Component {
  render() {
    const { name, image, tags, price, available } = this.props.product;

    return (
      <div className="product col-3 mb-3">
        <div className="bg-white rounded p-3">
          <div>
            <figure className="position-relative rounded">
              <div
                class="position-absolute"
                style={{
                  top: "0px",
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                {available ? "" : "Out of Stock"}
              </div>
              <img className="img-fluid" src={image} alt="" />
            </figure>
            <small>{this.props.tags}</small>
            <p>{name}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-1">{formatPrice(price)}</p>
            <button
              className="position-relative btn bg-secondary rounded-circle"
              style={{ width: "32px", height: "32px" }}
            >
              <i
                class="fas fa-shopping-cart position-absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              ></i>
              {/* <i class="fas fa-exclamation"></i> */}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
