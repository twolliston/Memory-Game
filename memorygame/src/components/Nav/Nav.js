
import React from "react";
import "./Nav.css";

// const Nav = props => (
//   <nav>
//     <h6>{props.title}</h6>
//     <ul>
//       <li id="rw">{props.rightWrong}</li>

//       <li id="cur-sco">Current Score: {props.score}</li>

//       <li id="top-sco">Top Score: {props.topScore}</li>
//     </ul>
//   </nav>
// );

// export default Nav;

const Nav = props => (
  <nav className="navbar">

    <ul>
      <li className="brand">
        <a href="/">Clicky Game</a>
      </li>
      <li id="rw">{props.rightWrong}</li>
      <li id="cur-sco">Current Score: {props.score}</li>
      <li id="top-sco">Top Score: {props.topScore}</li>

    </ul>
  </nav >
);

export default Nav;