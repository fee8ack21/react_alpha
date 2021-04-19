import React from "react";
class ProductToolBox extends React.Component {
  render() {
    return (
      <div className="product-tool-box py-3 border-bottom border-primary">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3>商品</h3>
          </div>
          <div className="col-6">
            <div className="form-group mb-0">
              <input type="text" className="form-control" placeholder="搜尋" />
            </div>
          </div>
          <div>
            <a href="#" className="position-relative">
              <i class="fas fa-shopping-cart h4"></i>
              <span class="badge badge-pill badge-danger position-absolute text-center" style={{'top':'-15px','right':'-5px'}}>0</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductToolBox;
