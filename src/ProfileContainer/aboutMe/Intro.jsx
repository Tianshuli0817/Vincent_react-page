import React from "react";
import "./intro.css";
import pink from "../Home/pink.JPG";

function Introduction() {
  return (
    <div className="introContainer">
      <div className="about-me">
        <h1 className="intro-title">Hey there! </h1>
        <p>
          My name is Vincent Li,I am currently a junior studying finance and
          computer science at WashU, and this is my website!
        </p>
      </div>
      <div className="picture">
        <img src={pink} alt=" " width="500px" />
      </div>
    </div>
  );
}

export default Introduction;
