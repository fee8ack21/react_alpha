import React from "react";
import axios from "common/axios";
import { toast } from "react-toastify";
class AddInventory extends React.Component {
  state = {
    name: "",
    price: "",
    tags: "",
    image1: "",
    image2: "",
    status: "available",
  };
  //
  showToast = () => {
    toast.dark("Your submission has been saved !", {
      autoClose: true,
    });
  };
  //
  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };
  //
  submit = (e) => {
    e.preventDefault();
    const product = { ...this.state };
    axios.post("products", product).then((res) => {
      this.props.close(res.data);
      this.showToast();
    });
  };
  //
  render() {
    return (
      <div className="add-inventory-wrap">
        <form action="" onSubmit={this.submit}>
          <div className="form-group">
            <label htmlFor="add-name">Name：</label>
            <textarea
              id="add-name"
              className="form-control"
              name="name"
              cols="30"
              rows="4"
              value={this.state.name}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="add-price">Price：</label>
            <input
              id="add-price"
              className="form-control"
              name="price"
              type="number"
              min={1}
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="add-image1">Image1：</label>
            <input
              id="add-image1"
              className="form-control"
              name="image1"
              type=""
              value={this.state.image1}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="add-image2">Image2：</label>
            <input
              id="add-image2"
              className="form-control"
              name="image2"
              type=""
              value={this.state.image2}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="add-tags">Tags：</label>
            <input
              id="add-tags"
              className="form-control"
              name="tags"
              type="text"
              value={this.state.tags}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="add-available">Status：</label>
            <select
              id="add-available"
              className="form-control"
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            >
              <option value="available">available</option>
              <option value="outOfStock">out of stock</option>
            </select>
          </div>
          <div className="btn-wrap form-group d-flex justify-content-between">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => {
                this.props.close();
              }}
            >
              Cancel
            </button>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddInventory;
