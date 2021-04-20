import React from "react";
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
            <a href="#!" className="position-relative">
              <i className="fas fa-shopping-cart h4"></i>
              <span className="badge badge-pill badge-danger position-absolute text-center">
                0
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductToolBox;
