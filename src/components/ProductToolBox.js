import React from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
class ProductToolBox extends React.Component {
  state = {
    searchText: "",
  };
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchText: value,
    });
    this.props.search(value);
  };
  //
  clearSearchText = () => {
    this.setState({
      searchText: "",
    });
    this.props.search("");
  };
  //
  goCart = (e) => {
    e.preventDefault();
    if (!global.auth.isLogin()) {
      this.props.history.push("/login");
      toast("Please login first !");
      return;
    }
    this.props.history.push("/cart");
  };
  //
  render() {
    return (
      <div className="product-tool-box py-3 border-bottom border-primary">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3>Shop</h3>
          </div>
          <div className="col-6">
            <div className="search-box form-group d-flex mb-0">
              <input
                type="text"
                className="form-control mr-1"
                placeholder="Search"
                value={this.state.searchText}
                onChange={this.handleChange}
              />
              <button
                className="cancel-btn btn bg-white"
                onClick={this.clearSearchText}
              >
                <i className="fas fa-times"></i>{" "}
              </button>
            </div>
          </div>
          <div className="cart-icon-wrap">
            <a
              href="#!"
              className="position-relative"
              onClick={(e) => {
                this.goCart(e);
              }}
            >
              <i className="fas fa-shopping-cart"></i>
              <span className="badge badge-pill badge-danger position-absolute text-center">
                {this.props.cartNum}
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ProductToolBox);
