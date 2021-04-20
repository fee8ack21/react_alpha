import React from "react";
// import axios from "axios";
// import ReactDOM from "react-dom";
import ProductToolBox from "components/ProductToolBox";
import Product from "components/Product";
import axios from "common/axios";
import Panel from "components/Panel";
import AddInventory from "components/AddInventory";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// 類別寫法
class Products extends React.Component {
  state = {
    sourcrProducts: null,
    filterProducts: null,
    panelState: false,
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
    axios.get("/products").then((response) => {
      this.setState({
        sourceProducts: response.data,
        filterProducts: [...response.data],
      });
    });
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
    Panel.openPanel({
      component: AddInventory,
      callback: (data) => {
        if (data) {
          this.add(data);
        }
      },
    });
  };
  add = (product) => {
    const _products = [...this.state.sourceProducts];
    _products.push(product);
    this.setState({
      sourceProducts: _products,
      filterProducts: _products,
    });
  };
  render() {
    return (
      <>
        <div className="products container">
          <ProductToolBox search={this.search} />
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
                        <Product product={item} key={item.id} />
                      </CSSTransition>
                    );
                  })
                : ""}
            </TransitionGroup>
          </div>
          <button
            className="panel-add-btn btn btn-warning position-fixed text-center font-weight-bold rounded-0"
            onClick={this.openPanelAdd}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </>
    );
  }
}
// 函式寫法
// function Products() {
//   const product = [
//     {
//       id: "1",
//       name: "air Jordan 4",
//       price: "1234",
//       tags: "test",
//       image: "images/1.jpeg",
//       available: true,
//     },
//     {
//       id: "2",
//       name: "air Jordan 4",
//       price: "1214",
//       tags: "test",
//       image: "images/1.jpeg",
//       available: false,
//     },
//   ];
//   return (
//     <>
//       <div className="container">
//         <ProductToolBox />
//         <div className="product-list row mt-3">
//           {/* <Product product={product} /> */}
//           {product.map((item) => {
//             return <Product product={item} key={item.id} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

export default Products;
