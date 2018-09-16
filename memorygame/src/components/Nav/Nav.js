
import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <h1>{props.title}</h1>
    <ul>
      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;