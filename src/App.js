import Alert from "./Alert.js";
import BorderWindow from "./BorderWindow.js";
import NumberBox from "./NumberBox.js";
import SumOfTwo from "./SumOfTwo.js";
import React from "react";
import RollDice from "./Dice.js";

function DisplayMsg(props) {
  return (
    <div
      style={{
        border: "2px solid red",
        color: "blue",
        fontSize: "18px",
        textAlign: "center",
        width: "300px",
      }}
    >
      <p>{props.msg}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Alert message="This is an alert!" />
      <DisplayMsg msg="Hello World" />
      <BorderWindow img={require("./buffet.webp")} />
      <SumOfTwo a={Math.random() * 100 + 1} b={Math.random() * 100 + 1} />
      <NumberBox initialValue={100} />
      <RollDice start={1} />
    </>
  );
}

export default App;
