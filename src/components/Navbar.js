import React, { Component } from "react";
import "./Navbar.css";
import MyDropdown from "./Dropdown.js";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
      menuIconState: false,
    };

    this.handleClick = this.handleClick.bind(this);
    //this.login = this.login.bind(this);
  }

  /* //WHAT IS WRONG WITH THIS????????????
  login() {
    this.setState( {logedIn : !this.state.logedIn});
  }

   <button onClick={this.login}>lol</button>
   
*/

  handleClick() {
    this.setState({ menuIconState: !this.state.menuIconState });
  }

  render() {
    const menuItems = [
      {
        className: "nav-links",
        url: "www.google.com",
        title: "PROJETCS",
      },
      {
        className: "nav-links",
        url: "www.google.com",
        title: "EDUCATION",
      },
      {
        className: "nav-links",
        url: "www.google.com",
        title: "HOBBIES",
      },
    ];

    const logedInMenuItems = [
      {
        title: "User",
        link: " ",
      },
      {
        title: "Logout",
        link: " ",
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
                {this.state.logedIn ? "LOGOUT" : "LOGIN"}
              </Link>
            </li>
          </ul>

          {/* This is a customised Material Ui dropdown menu.*/}
          <MyDropdown
            iconClassName={
              this.state.logedIn ? "far fa-user" : "fas fa-sign-in-alt"
            }
            menuItems={
              this.state.logedIn ? logedInMenuItems : LogedOutMenuItems
            }
            isLogedIn={this.state.logedIn}
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
