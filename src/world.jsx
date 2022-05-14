import React from "react";
import { Component } from "react";

class Hello extends Component {
  state = {
    count: 100,
    imgURL: "https://picsum.photos/200",
  };
  styles = {
    fontSize: 50,
  };
  render() {
    // React.createElement("div");
    return (
      <React.Fragment>
        <img src={this.state.imgURL} alt="null" />
        <span style={this.styles} className="badge badge-primary m-5">
          {this.PrintNum()}
        </span>
        <button className="btn btn-small btn-success" href="#" type="button">
          increase
        </button>
        {/* PrintNum(); */}
      </React.Fragment>
    );
  }
  PrintNum() {
    const { count } = this.state;
    return count === 0 ? "hype" : count;
  }
}

export default Hello;
