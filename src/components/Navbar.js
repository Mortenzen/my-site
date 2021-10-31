import React, { Component } from "react";
import "./Navbar.css";
import MyDropdown from "./Dropdown.js";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      menuIconState: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
  }

  handleClick() {
    this.setState({ menuIconState: !this.state.menuIconState });
  }

  onLogOut() {
    localStorage.setItem("token", null);
  }

  componentDidMount = () => {
    //alert(localStorage.getItem("token"));
    //alert(this.state.signedIn);

    let temp = localStorage.getItem("token");
    if (!(temp === "null") && !(temp === null)) {
      this.setState({ signedIn: true });
    } else {
      this.setState({ signedIn: false });
    }
  };

  render() {
    const menuItems = [
      {
        className: "nav-links",
        url: "/education",
        title: "EDUCATION",
      },
      {
        className: "nav-links",
        url: "www.google.com",
        title: "EXPERIENCE",
      },
      {
        className: "nav-links",
        url: "/login",
        title: "LOGIN",
      },
    ];

    const logedInMenuItems = [
      {
        title: "ToDo",
        link: "/todo",
      },
      {
        title: "Logout",
        link: "logout",
      },
    ];

    const LogedOutMenuItems = [
      {
        title: "Login",
        link: "login",
      },
      {
        title: "SignUp",
        link: "signup",
      },
    ];

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Ramzi
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={
                this.state.menuIconState ? "fas fa-times" : "fas fa-bars"
              }
            />
          </div>
          <ul
            className={
              this.state.menuIconState ? "nav-menu active" : "nav-menu"
            }
          >
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.className} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link className="nav-links log-in-out">
                {this.state.signedIn ? "LOGOUT" : "LOGIN"}
              </Link>
            </li>
          </ul>

          {/* This is a customised Material Ui dropdown menu.*/}
          <MyDropdown
            iconClassName={
              this.state.signedIn ? "far fa-user" : "fas fa-sign-in-alt"
            }
            menuItems={
              this.state.signedIn ? logedInMenuItems : LogedOutMenuItems
            }
            isLogedIn={this.state.signedIn}
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
