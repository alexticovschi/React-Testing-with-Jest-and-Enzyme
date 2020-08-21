import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="App">
        <div data-test="component-app">
          <h1 data-test="counter-display">
            The counter is currently {this.state.counter}
          </h1>
          <button
            data-test="increment-button"
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            Increment counter
          </button>
        </div>
      </div>
    );
  }
}

export default App;
