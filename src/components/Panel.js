import React from "react";
import { render } from "react-dom";
class Panel extends React.Component {
  state = {
    panelState: false,
    component: null,
    parentCallback: (data) => {
      console.log(data);
    },
  };
  //
  closePanel = (data) => {
    this.setState({ panelState: false });
    this.state.parentCallback(data);
  };
  //
  openPanel = (options) => {
    const { component, callback } = options;
    const _key = new Date().getTime();
    const _component = React.createElement(component, {
      close: this.closePanel,
      key: _key,
    });
    this.setState({
      panelState: true,
      component: _component,
      parentCallback: callback,
    });
  };
  //
  render() {
    const _class = {
      true: "panel-wrap active",
      false: "panel-wrap",
    };
    return (
      <div className={_class[this.state.panelState]}>
        <div className="over-layer" onClick={this.closePanel}></div>
        <div className="panel bg-white">
          <div className="panel-head d-flex justify-content-end px-3 pt-3 pb-5">
            <span
              className="close-icon font-weight-bold h5"
              onClick={this.closePanel}
            >
              <i className="fas fa-times"></i>
            </span>
          </div>
          <div className="panel-body px-3">{this.state.component}</div>
        </div>
      </div>
    );
  }
}
const _div = document.createElement("div");
document.body.appendChild(_div);
const _panel = render(<Panel />, _div);

export default _panel;
