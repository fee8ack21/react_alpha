import React from "react";
import axios from "common/axios";
import { toast } from "react-toastify";
class AddInventory extends React.Component {
  state = {
    name: "",
    price: "",
    color: [],
    image1: "",
    image2: "",
    status: "available",
    time: "",
  };
  //
  showToast = (p) => {
    if (p === "ok") {
      toast("Your submission has been saved!", {
        autoClose: true,
      });
    } else if (p === "no") {
      toast("Oops! Something's wrong!", {
        autoClose: true,
      });
    }
  };
  //
  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "price") {
      const adjustVal = value === "0" || value === "" ? "1" : value;
      this.setState({
        [name]: adjustVal,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
  //
  submit = async (e) => {
    e.preventDefault();
    await this.setState({
      time: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()}`,
    });
    const product = { ...this.state };
    //
    for (let item in product) {
      if (item !== "color") {
        if (product[item].includes("<") || product[item].includes(">")) {
          this.showToast("no");
          this.props.close();
          return;
        }
      } else if (item === "color") {
        console.log(123);
        if (product["color"].length === 0) {
          this.showToast("no");
          this.props.close();
          return;
        }
        //
        for (let i = 0; i < product["color"].length; i++) {
          if (
            product["color"][i].includes("<") ||
            product["color"][i].includes(">")
          ) {
            this.showToast("no");
            this.props.close();
            return;
          }
        }
      }
    }
    //
    axios.post("products", product).then((res) => {
      this.props.close(res.data);
      this.showToast("ok");
    });
  };
  //
  addColor = (e) => {
    const newColorArr = [...this.state.color];
    newColorArr.push(e.target.value);
    this.setState({ color: newColorArr });
  };
  //
  clearColor = (e) => {
    this.setState({ color: [] });
  };
  //
  render() {
    return (
      <div className="add-inventory-wrap">
        <form action="" onSubmit={this.submit}>
          <div className="form-group">
            <label htmlFor="add-name" className="fs-md-rwd">
              Name：
            </label>
            <textarea
              id="add-name"
              className="fs-md-rwd form-control"
              name="name"
              cols="30"
              rows="4"
              pattern="^[a-zA-Z0-9_.-\/^\s*$]*$"
              required="required"
              value={this.state.name}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="add-price" className="fs-md-rwd">
              Price：
            </label>
            <input
              id="add-price"
              className="fs-md-rwd form-control"
              name="price"
              type="number"
              required="required"
              min={1}
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="add-image1" className="fs-md-rwd">
              Image1：
            </label>
            <input
              id="add-image1"
              className="fs-md-rwd form-control"
              name="image1"
              type=""
              required="required"
              value={this.state.image1}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="add-image2" className="fs-md-rwd">
              Image2：
            </label>
            <input
              id="add-image2"
              className="fs-md-rwd form-control"
              name="image2"
              type=""
              required="required"
              value={this.state.image2}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group position-relative">
            <label htmlFor="add-color" className="fs-md-rwd">
              Color：
              <input
                type="color"
                required="required"
                onChange={this.addColor}
              />
              <span
                className="fs-md-rwd position-absolute"
                style={{ right: "10px", top: "38px", cursor: "pointer" }}
                onClick={this.clearColor}
              >
                <i class="fas fa-times"></i>
              </span>
            </label>
            <input
              id="add-color"
              className="fs-md-rwd form-control"
              readOnly="readonly"
              name="color"
              required="required"
              type="text"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="add-available" className="fs-md-rwd">
              Status：
            </label>
            <select
              id="add-available"
              className="fs-md-rwd form-control"
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            >
              <option value="available" className="fs-md-rwd">
                Available
              </option>
              <option value="outOfStock" className="fs-md-rwd">
                Out of Stock
              </option>
            </select>
          </div>
          <div className="btn-wrap form-group d-flex justify-content-between">
            <button
              className="fs-md-rwd btn btn-secondary"
              type="button"
              onClick={() => {
                this.props.close();
              }}
            >
              Cancel
            </button>
            <button className="fs-md-rwd btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddInventory;
