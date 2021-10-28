import React, { Component } from "react";
import "./Login.css";
import SignIn from "../LoginForm.js";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      isValid: true,
    };

    // Functions for Lifting up satets
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChange(x) {
    this.setState({ email: x });
  }

  onPasswordChange(x) {
    this.setState({ password: x });
  }

  onSubmit() {
    const userObject = {
      email: this.state.email,
      password: this.state.password,
    };

    if (this.validate()) {
      axios
        .post("https://ramziproject.co.uk/api/reactLogin", userObject)
        .then((res) => {
          this.setState({ email: "", password: "" });
          localStorage.setItem("token", res.data.token);
          axios.defaults.headers.common["authorization"] =
            "Bearer " + localStorage.getItem("token");
        })
        .then(() => {
          this.props.history.push("/");
          window.location.reload();
        })

        .catch((error) => {
          console.log(error);
          console.log("Login failed");
          alert("The email or password is incorrect.");
        });
    }
  }

  validate() {
    let email = this.state.email;
    let errors = {};
    let isValid = true;

    if (!email) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div className="loginPage">
        {/*Customised MaterialUI example component. Input data is lifted up.*/}
        <SignIn
          onEmailChange={this.onEmailChange}
          onPasswordChange={this.onPasswordChange}
          onSubmit={this.onSubmit}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default Login;
