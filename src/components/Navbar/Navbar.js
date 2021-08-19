import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIconState: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ menuIconState: !this.state.menuIconState });
  }

  render() {
    const menuItems = [
      {
        className: "nav-links",
        url: "www.google.com",
        title: "DOG",
      },
      {
        className: "nav-links",
        url: "www.google.com",
        title: "DOG2",
      },
      {
        className: "nav-links",
        url: "www.google.com",
        title: "DOG3",
      },
    ];

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/dog" className="navbar-logo">
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
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
