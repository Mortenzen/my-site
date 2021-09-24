import React, { Component } from "react";
import "./Home.css";
import Hero from "../Hero.js";
import Aboutme from "../Aboutme.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Hero />
        <Aboutme />
      </>
    );
  }
}

export default Home;
