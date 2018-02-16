import React, { Component } from "react";
import classnames from "classnames";
//import classnames from "./index.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  increment() {
    this.setState(previouState => ({
      counter: previouState.counter + 1
    }));
  }

  render() {
    let className = "";

    if (this.state.counter % 2 === 0) {
      className = "even";
    } else {
      className = "odd";
    }

    return (
      <div className={className}>
        <div>counter : {this.state.counter}</div>
        <br />
        <button onClick={() => this.increment()}>increment</button>
      </div>
    );
  }
}
