import React from "react";
import ReactDOM from "react-dom";

const name = "Alokwu";

const date = new Date();

const currentTime = date.getHours();

let greetings;
const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greetings = "Good morning";
  customStyle.color = "red";
} else if (currentTime < 14) {
  greetings = "Good afternoon";
  customStyle.color = "Pink";
} else {
  greetings = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}> {`${greetings} ${name}`}</h1>
  </div>,

  document.getElementById("root")
);
