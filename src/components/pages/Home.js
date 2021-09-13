import React, { Component } from "react";
import "./Home.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container style={{ backgroundColor: "black", maxWidth:"100%"}}>
        <div className="hero-container">
        <div className="hero-text"></div>
        <div className="hero-picture"></div>
        </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
