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
    if (!(temp === "null") && !(temp === null)) {
      this.setState({ signedIn: true });
    } else {
      this.setState({ signedIn: false });
    }
  };

  render() {
    const fade = document.querySelectorAll(".fade");
    const appearedState = {
      threshold: 0,
      rootMargin: " 0px 0px -1000px 0px",
    };
    const appearOnScroll = new IntersectionObserver(function (fade, onScroll) {
      fade.forEach((fade) => {
        if (fade.isIntersecting) {
          return;
        } else {
          fade.target.classList.add("appear");
          onScroll.unobserve(fade.target);
        }
      });
    }, appearedState);

    fade.forEach((fade) => {
      appearOnScroll.observe(fade);
    });

    return (
      <div className="aboutme-wrapper">
        <div className="intro">
          <h1 className="intro-h1 fade-from-bot fade">
            Hello, my name is Ramzi.
          </h1>
          <div className="intro-text">
            <h2 className="intro-h2 fade-from-bot fade">
              I am currently trying to start my career as a web developer. I
              created this website to provide a little extra information to my
              CV.
            </h2>
          </div>
          <div className="cards-wrapper fade-from-bot fade">
            <div className="card-wrapper">
              <a href="/education">
                {" "}
                <MediaCard
                  className="card "
                  content={"My education with details"}
                  title={"Education"}
                  link={"./education_1.png"}
                />
              </a>
            </div>
            <div className="card-wrapper">
              <a href="/experience">
                <MediaCard
                  className="card"
                  content={"Working exprerience "}
                  title={"Experience"}
                  link={"./IMG_1548.JPG"}
                />
              </a>
            </div>
            <div className="card-wrapper">
              <a href={this.state.signedIn ? "/todo" : "/login"}>
                <MediaCard
                  className="card"
                  content={"A small todo list applicetion to test the backend"}
                  title={"Todo List Application"}
                  link={"../SeekPng.com_office-people-png_684786.png"}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="info-wrapper">
          <div className="info-container">
            <div className="info-1">
              <p className="intro-p">
                Although I use component libraries most of the components are
                made by me with HTML and CSS. The back-end NodeJS application is
                being rewritten right now. The updates will include the access
                token and refresh token authentication method (now, I use only a
                jwt token stored locally) and basic updates (server tells the
                frontend when data is changed etc.) to have a properly
                functioning application. As I finish the new features I will
                share the Github repository. Now If you had time, you could also
                use the signup/login option to try the todo-list.
              </p>
            </div>
            <div className="info-2">
              <img
                class="gear-png"
                src="./PinClipart.com_student-group-work-clipart_1466250.png"
                alt=""
              />
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
