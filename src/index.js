import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
const today = new Date();
var time = today.getHours();
var customStyle = {
  color: ""
};

var greeting;
if (time < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "good afternoon";
  customStyle.color = "green";
} else {
  greeting = "good night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div className="heading" style={customStyle}>
    {greeting}
  </div>,
  rootElement
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
