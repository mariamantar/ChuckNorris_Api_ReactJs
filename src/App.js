import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    console.log(
      "step1: this is like initialize in ruby which get execured first"
    );
    super(props);
    // initialise a state object data
    this.state = {
      data: []
    };
  }
  // method to get data from the api
  randomJoke() {
    const url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        console.log(result.value);
        this.setState({
          data: result.value
        });
      });
  }
  componentWillMount() {
    // call a function to get a random chuck norris joke from the chuck norris api
    console.log("step2: component will mount gets executed before render");
    this.randomJoke();
  }
  componentDidMount() {
    console.log(
      "step4: component did mount gets executed after render and it runs each time the state changes"
    );
    setInterval(() => this.randomJoke(), 5000);
  }
  render() {
    console.log(
      "step3: render gets executed after component Will mount method in the lifecycle stage"
    );
    return (
      <div>
        <h1> {this.state.data} </h1>
      </div>
    );
  }
}

export default App;
