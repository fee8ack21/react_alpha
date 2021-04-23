import React from "react";
import axios from "common/axios";
import { toast } from "react-toastify";
class EditInventory extends React.Component {
  state = {
    id: "",
    name: "",
    price: "",
    color: "",
    image1: "",
    image2: "",
    status: "available",
    time: "",
  };
  //
  componentDidMount() {
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
    axios.put(`products/${this.state.id}`, product).then((res) => {
      this.props.close(res.data);
      this.showToast();
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
            <label htmlFor="edit-name">Name：</label>
            <textarea
              id="edit-name"
              className="form-control"
              name="name"
              cols="30"
              rows="4"
              value={this.state.name}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="edit-price">Price：</label>
            <input
              id="edit-price"
              className="form-control"
              name="price"
              type="number"
              min={1}
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-image1">Image1：</label>
            <input
              id="edit-image1"
              className="form-control"
              name="image1"
              type=""
              value={this.state.image1}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-image2">Image2：</label>
            <input
              id="edit-image2"
              className="form-control"
              name="image2"
              type=""
              value={this.state.image2}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group position-relative">
            <label htmlFor="edit-color">
              Color： <input type="color" onChange={this.addColor} />
              <span
                className="position-absolute"
                style={{ right: "10px", top: "38px", cursor: "pointer" }}
                onClick={this.clearColor}
              >
                <i class="fas fa-times"></i>
              </span>
            </label>
            <input
              id="edit-color"
              className="form-control"
              name="color"
              type="text"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-available">Status：</label>
            <select
              id="edit-available"
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
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.onDelete}
            >
              Delete
            </button>
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditInventory;
