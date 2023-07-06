import React from "react";

export default class NumberBox extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  // recommended when you need to update the state based on the previous state,
  // as it ensures the correctness of the state updates, especially in asynchronous scenarios

  clickPlus = () => {
    this.setState((prevState) => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }));
  };

  clickMinus = () => {
    this.setState({
      count: this.state.count - Math.floor(Math.random() * 100),
    });
  };

  render() {
    return (
      <>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            height: "50px",
            width: "100px",
            margin: "10px",
            textAlign: "center",
          }}
        >
          {this.state.count}
        </div>
        <button onClick={this.clickPlus}>Increase</button>
        <button onClick={this.clickMinus}>Decrease</button>
      </>
    );
  }
}
