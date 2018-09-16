import React, { Component } from "react";
import FriendCard from "./components/GaurdianCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import gaurdians from "./gaurdians.json";
import arrayShuffle from "array-shuffle";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    gaurdians,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };


  handleClick = id => {
    console.log("button clicked");
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
   
    const newScore = this.state.currentScore + 1;
    console.log("Increment counter " + newScore);
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    console.log("Reset");
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Glaven!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledGaurdians = arrayShuffle(gaurdians);;
    this.setState({ gaurdians: shuffledGaurdians });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Gaurdians of the Galaxy</Title>
        {this.state.gaurdians.map(gaurdian => (
          <FriendCard
            key={gaurdian.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={gaurdian.id}
            image={gaurdian.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
