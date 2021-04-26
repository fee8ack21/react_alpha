import React from "react";
import "scss/app.scss";
import Router from "Router";
//
class App extends React.Component {
  render() {
    return (
      <>
        <Router setFooterState={this.props.setFooterState} />
      </>
    );
  }
}
//
export default App;
