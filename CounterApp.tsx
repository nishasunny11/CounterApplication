import React, { Component } from "react";
import "./CounterApp.css"; // Import the CSS file

type State1 = {
  count: number;
};

class CounterApp extends Component<{}, State1> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 3 };
  }

  plus = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  minus = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    return (
    <>
      <h1 style={{color:"black", textAlign:"center"}}>Counter Application</h1>
      <div className="container">
        
        <button className="button" onClick={this.plus}>
          +
        </button>
        <p className="count">{this.state.count}</p>
        <button className="button" onClick={this.minus}>
          -
        </button>
      </div>
      </>
    );
  }
}

export default CounterApp;
