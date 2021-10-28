import React, { Component } from "react";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    localStorage.setItem("token", null);
    this.props.history.push("/");
    window.location.reload();
  };
  render() {
    return <></>;
  }
}

export default Logout;
