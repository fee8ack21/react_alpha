import React from "react";
import { withRouter } from "react-router-dom";
import ProductToolBox from "components/ProductToolBox";
import Product from "components/Product";
import axios from "common/axios";
import { toast } from "react-toastify";
import Panel from "components/Panel";
import Spinner from "components/Spinner";
import AddInventory from "components/AddInventory";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// 類別寫法
class Products extends React.Component {
  state = {
    sourcrProducts: [],
    filterProducts: [],
    panelState: false,
    cartNum: 0,
    loadingState: false,
  };
  componentDidMount() {
    // fetch api
    // fetch("http://localhost:3003/products")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({ products: data });
    //   });

    // axios api
    // traditional style
    // axios.get("http://localhost:3003/products").then((response) => {
    //   this.setState({ products: response.data });
    // });

    // module way
    axios
      .get("/products")
      .then((response) => {
        this.setState({
          sourceProducts: response.data,
          filterProducts: [...response.data],
        });
      })
      .finally(() => {
        this.setState({ loadingState: true });
      });
    this.updateCartNum();
  }
  //
  search = (text) => {
    let _products = [...this.state.sourceProducts];
    if (text !== null) {
      _products = _products.filter((item) => {
        const matchArray = item.name.match(new RegExp(text, "gi"));
        return !!matchArray;
      });
    }
    this.setState({
      filterProducts: _products,
    });
  };
  //
  openPanelAdd = () => {
    if (!global.auth.isLogin()) {
      this.props.history.push("/login");
      toast("Please login to continue!");
      return;
    }
    //
    Panel.openPanel({
      component: AddInventory,
      callback: (data) => {
        if (data !== undefined && "id" in data) {
          console.log(data);
          this.add(data);
        }
      },
    });
  };
  add = (product) => {
    const _products = [...this.state.sourceProducts];
    _products.push(product);
    //
    const _fproducts = [...this.state.filterProducts];
    _fproducts.push(product);
    //
    this.setState({
      sourceProducts: _products,
      filterProducts: _fproducts,
    });
  };
  //
  update = (product) => {
    const _products = [...this.state.sourceProducts];
    const _index = _products.findIndex((item) => item.id === product.id);
    _products.splice(_index, 1, product);
    //
    const _fproducts = [...this.state.filterProducts];
    const _findex = _fproducts.findIndex((item) => item.id === product.id);
    _fproducts.splice(_findex, 1, product);
    //
    this.setState({
      sourceProducts: _products,
      filterProducts: _fproducts,
    });
  };
  //
  delete = (id) => {
    const _products = this.state.sourceProducts.filter(
      (item) => item.id !== id
    );
    //
    const _fproducts = this.state.filterProducts.filter(
      (item) => item.id !== id
    );
    //
    this.setState({
      sourceProducts: _products,
      filterProducts: _fproducts,
    });
  };
  //
  updateCartNum = async () => {
    const cartNum = await this.initCartNum();
    this.setState({
      cartNum: cartNum,
    });
  };
  //
  initCartNum = async () => {
    const user = global.auth.getUser() || {};
    const res = await axios.get(`/carts`, { params: { userId: user.email } });
    const carts = res.data || [];
    return carts.map((cart) => cart.mount).reduce((a, value) => a + value, 0);
  };
  //
  renderAddBtn = () => {
    const user = global.auth.getUser() || {};
    if (user.type === 1) {
      return (
        <button
          className="panel-add-btn fs-md-rwd btn btn-warning position-fixed text-center font-weight-bold rounded-0"
          onClick={this.openPanelAdd}
        >
          <i className="fas fa-plus"></i>
        </button>
      );
    }
  };
  render() {
    return (
      <>
        {!this.state.loadingState && <Spinner />}
        <div className="products container">
          <ProductToolBox search={this.search} cartNum={this.state.cartNum} />
          <div className="product-list row mt-3">
            <TransitionGroup component={null}>
              {!!this.state.filterProducts
                ? this.state.filterProducts.map((item) => {
                    return (
                      <CSSTransition
                        classNames="product-fade"
                        timeout={{ enter: 200, exit: 200 }}
                        key={item.id}
                      >
                        <Product
                          product={item}
                          key={item.id}
                          update={this.update}
                          delete={this.delete}
                          updateCartNum={this.updateCartNum}
                        />
                      </CSSTransition>
                    );
                  })
                : ""}
            </TransitionGroup>
          </div>
          {this.renderAddBtn()}
        </div>
      </>
    );
  }
}
export default withRouter(Products);
