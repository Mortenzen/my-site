import React, { Component } from "react";
import "./Signup.css";
import SignUp from "../SignupForm.js";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      firstname: "",
      lastname: "",
      errors: {},
      isValid: true,
    };

    // Functions for Lifting up satets
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPasswordConfirmChange = this.onPasswordConfirmChange.bind(this);
    this.onFirstnameChange = this.onFirstnameChange.bind(this);
    this.onLastnameChange = this.onLastnameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChange(x) {
    this.setState({ email: x });
  }

  onPasswordChange(x) {
    this.setState({ password: x });
  }

  onFirstnameChange(x) {
    this.setState({ firstname: x });
  }

  onLastnameChange(x) {
    this.setState({ lastname: x });
  }

  onPasswordConfirmChange(x) {
    this.setState({ passwordConfirm: x });
  }

  onSubmit() {
  
    var result;

    const userObject = {
      name: this.state.firstname,
      email: this.state.email,
      password: this.state.password,
    };

    if (this.validate()) {
      axios
        .post("https://ramziproject.co.uk/api/reactInsert", userObject)
        .then((res) => {
          result = res.data;
          if (result === "success") {
            //PROBABLY INCORRECT !!!
            this.setState({
              name: "",
              email: "",
              password: "",
              passwordMatch: "",
            });
            this.props.history.push("/login");
          }
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
          alert("Email is already in use");
        });
    }
  }

  validate() {
    let firstName = this.state.firstname;
    let lastName = this.state.lastname;
    let email = this.state.email;
    let password = this.state.password;
    let passwordMatch = this.state.passwordConfirm;
    let errors = {};
    let isValid = true;

    if (!firstName) {
      isValid = false;
      errors["firstName"] = "Please enter your name.";
    }

    if (!lastName) {
      isValid = false;
      errors["lastName"] = "Please enter your name.";
    }

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

    if (!password || !(password.length > 6)) {
      isValid = false;
      errors["password"] = "Please enter valid password.";
    }

    if (!(passwordMatch === password)) {
      isValid = false;
      errors["passwordMatch"] = "The passwords do not match.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div className="signupPage">
        {/*Customised MaterialUI example component. Input data is lifted up.*/}
        <SignUp
          onEmailChange={this.onEmailChange}
          onPasswordChange={this.onPasswordChange}
          onFirstnameChange={this.onFirstnameChange}
          onLastnameChange={this.onLastnameChange}
          onPasswordConfirmChange={this.onPasswordConfirmChange}
          onSubmit={this.onSubmit}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default Signup;
