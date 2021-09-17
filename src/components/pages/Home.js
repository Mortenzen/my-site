import React, { Component } from "react";
import "./Home.css";
import Hero from "../Hero.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Hero />;
  }
}

export default Home;
