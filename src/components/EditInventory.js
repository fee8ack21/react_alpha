import React from "react";
import axios from "common/axios";
import { toast } from "react-toastify";
class EditInventory extends React.Component {
  state = {
    id: "",
    name: "",
    price: "",
    color: [],
    image1: "",
    image2: "",
    status: "available",
    time: "",
  };
  //
  componentDidMount() {
    //
    const {
      id,
      name,
      image1,
      image2,
      color,
      price,
      status,
      time,
    } = this.props.product;
    //
    this.setState({
      id,
      name,
      image1,
      image2,
      color,
      price,
      status,
      time,
    });
  }
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
  submit = (e) => {
    e.preventDefault();
    //
    this.setState({
      name: this.state.name.trim(),
      price: this.state.price.trim(),
      image1: this.state.image1.trim(),
      image2: this.state.image2.trim(),
      color: this.state.color.map((item) => {
        return item.trim();
      }),
    });
    //
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
    axios.put(`products/${this.state.id}`, product).then((res) => {
      this.props.close(res.data);
      this.showToast("ok");
    });
  };
  //
  onDelete = (e) => {
    e.preventDefault();
    const product = { ...this.state };
    axios.delete(`products/${this.state.id}`, product).then((res) => {
      this.props.delete(this.state.id);
      this.props.close();
      this.showToast();
    });
  };
  //
  addColor = (e) => {
    const newColorArr = [...this.state.color];
    newColorArr.push(e.target.value);
    console.log(newColorArr);
    this.setState({ color: newColorArr });
  };
  //
  clearColor = (e) => {
    this.setState({ color: [] });
  };
  render() {
    return (
      <div className="edit-inventory-wrap">
        <form action="" onSubmit={this.submit}>
          <div className="form-group">
            <label htmlFor="edit-name" className="fs-md-rwd">
              Name???
            </label>
            <textarea
              id="edit-name"
              className="fs-md-rwd form-control"
              name="name"
              cols="30"
              rows="4"
              value={this.state.name}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="edit-price" className="fs-md-rwd">
              Price???
            </label>
            <input
              id="edit-price"
              className="fs-md-rwd form-control"
              name="price"
              type="number"
              min={1}
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-image1" className="fs-md-rwd">
              Image1???
            </label>
            <input
              id="edit-image1"
              className="fs-md-rwd form-control"
              name="image1"
              type=""
              value={this.state.image1}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-image2" className="fs-md-rwd">
              Image2???
            </label>
            <input
              id="edit-image2"
              className="fs-md-rwd form-control"
              name="image2"
              type=""
              value={this.state.image2}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group position-relative">
            <label htmlFor="edit-color" className="fs-md-rwd">
              Color???{" "}
              <input
                type="color"
                className="fs-md-rwd"
                onChange={this.addColor}
              />
              <span
                className="position-absolute"
                style={{ right: "10px", top: "38px", cursor: "pointer" }}
                onClick={this.clearColor}
              >
                <i className="fas fa-times"></i>
              </span>
            </label>
            <input
              id="edit-color"
              className="fs-md-rwd form-control"
              readOnly="readonly"
              name="color"
              type="text"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-available" className="fs-md-rwd">
              Status???
            </label>
            <select
              id="edit-available"
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
              className="edit-cancel-btn fs-md-rwd btn btn-secondary"
              type="button"
              onClick={() => {
                this.props.close();
              }}
            >
              Cancel
            </button>
            <button
              className="fs-md-rwd btn btn-danger"
              type="button"
              onClick={this.onDelete}
            >
              Delete
            </button>
            <button className="fs-md-rwd btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditInventory;
