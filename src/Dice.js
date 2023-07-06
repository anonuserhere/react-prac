import React from "react";

export default class RollDice extends React.Component {
  state = {
    side: this.props.start,
  };

  rollDice = () => {
    this.setState({
      side: Math.floor(Math.random() * 6 + 1),
    });
  };

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            margin: "10px",
            height: "200px",
            width: "250px",
            backgroundColor: this.state.side === 6 ? "red" : "skyblue",
            justifyContent: "center",
            alignItems: "center",
            fontSize: `${10 + this.state.side * 5}px`,
          }}
        >
          <div> {this.state.side}</div>
          {this.state.side % 2 === 0 ? <p>number is even</p> : null}
        </div>
        <div>
          <button onClick={this.rollDice}>Roll Dice</button>
        </div>
      </>
    );
  }
}
