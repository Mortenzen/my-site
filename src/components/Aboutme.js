import React, { Component } from "react";
import "./Aboutme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MediaCard from "./Card.js";

class Aboutme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    };
  }

  componentDidMount = () => {
    //alert(localStorage.getItem("token"));
    //alert(this.state.signedIn);

    let temp = localStorage.getItem("token");
    if (!(temp === "null") && !(temp === null)){
      this.setState({ signedIn: true });
    } else {
      this.setState({ signedIn: false });
    }
  };

  render() {
    return (
      <div className="aboutme-wrapper">
        <div className="intro">
          <h1 className="intro-h1">Hello, my name is Ramzi.</h1>
          <h2 className="intro-h2">
            I am currently trying to start my career as a web deweloper. I made
            this website to add a little extra information to my CV.
          </h2>
          <h3 className="intro-h3">
            If you had time, you could also use the signup/login option to try
            out the todo-list.
          </h3>
          <div className="cards-wrapper">
            <div className="card-wrapper">
              <a href="/education">
                {" "}
                <MediaCard
                  className="card"
                  content={"My education with details"}
                  title={"Education"}
                  link={
                    "https://www.chevening.org/wp-content/uploads/2019/07/Queens-Building.jpg"
                  }
                />
              </a>
            </div>
            <div className="card-wrapper">
              <MediaCard
                className="card"
                content={"fadfwea efwafjweoweaj jifowea jfiweafewa "}
                title={"Education"}
                link={
                  "https://www.kuka.com/-/media/kuka-corporate/images/products/systems/anlagenbau-automotive_header.jpg?rev=a96a65dcff084434bff9c5478c13903a&w=1400&hash=B2788946B9C7245F8AF262F2A067BD11"
                }
              />
            </div>
            <div className="card-wrapper">
              <a href={this.state.signedIn ? "/todo" : "/login"}>
                <MediaCard
                  className="card"
                  content={"fadfwea efwafjweoweaj jifowea jfiweafewa "}
                  title={"Todo List Application"}
                  link={
                    "https://www.chevening.org/wp-content/uploads/2019/07/Queens-Building.jpg"
                  }
                />
              </a>
            </div>
          </div>
        </div>
        <div class="lower-section section-divider">
          <h3 className="tech-h3">
            Here you will find some information about the technical side of the
            website.
          </h3>
          <Carousel className="carousel">
            <div>
              <h3 className="tech-title"> Front End</h3>
              <p className="carousel-p">
                Created with the React JS library with:
                <br />
                Material Ui, Axios etc.
              </p>
            </div>
            <div>
              <h3 className="tech-title"> Back End</h3>
              <p className="carousel-p">
                NodeJS application with:
                <br />
                JWT-token, pw. hashing etc.
                <br />
                MongoDB database
              </p>
            </div>
            <div>
              <h3 className="tech-title"> Server</h3>
              <p className="carousel-p">
                Ubuntu Server 18.04 LTS 64bit
                <br />
                VCPU : 1
                <br />
                RAM : 1GB
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Aboutme;
