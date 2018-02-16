import React, { Component } from "react";
import classnames from "classnames";

//import classnames from "./index.css";

import { Button } from "./bootstrap";

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
    const even = this.state.counter % 2 === 0;
    var className = classnames({
      even: even,
      odd: !even,
      modulo3: this.state.counter % 3 === 0,
      modulo7: this.state.counter % 7 === 0
    });

    return (
      <div className={className}>
        <div>counter : {this.state.counter}</div>
        <br />
        <Button onClick={() => this.increment()}>increment</Button>
      </div>
    );
  }
}
