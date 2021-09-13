import React, { Component } from "react";
import "./Login.css";
import SignIn from "../LoginForm.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    // Functions for Lifting up satets
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(x) {
    this.setState({ email: x });
  }

  onPasswordChange(x) {
    this.setState({ password: x });
  }

  render() {
    return (
      <div className="loginPage">
        {/*Customised MaterialUI example component. Input data is lifted up.*/}
        <SignIn
          onEmailChange={this.onEmailChange}
          onPasswordChange={this.onPasswordChange}
        />
      </div>
    );
  }
}

export default Login;
