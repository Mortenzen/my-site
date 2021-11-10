import React, { Component } from "react";
import "./Experience.css";
import Presenter from "../Presenter";
import ReactPlayer from "react-player";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var w = window.innerWidth;
    var playerWidth = "600px";
    if (w < 960) {
      alert("Less than 960");
      playerWidth = "300px;";
    }

    const presenterSeter1 = {
      title: "Robot X-Hungary Kft.",
      carouselItems: ["./robotx.jpg", "./IMG_1548.JPG", "./IMG_1689.JPG"],
      intro1: "Industrial Automation",
      content1:
        "Robot X is engaged in industrial  automation as well as the design and construction\
         of robot cells, assembly and production lines, and special-purpose machines.",
      intro2: "Robot/PLC programmer",
      content2:
        "For more than a year I worked as a Robot/PLC programmer at the Robot X-Hungary Kft.\
         My duties included programming industrial robots, solving PLC programming tasks,\
        and project management responsibilities in various factories even abroad.\
        Robot programming: KUKA, Yaskawa,\
        ABB,FANUC [Programming in C if possible]. PLC programming: (smaller machines)\
        SIEMENS, Omron, [Programming in SCL if possible].",
    };

    return (
      <div className="experience-wrapper">
        <Presenter presenterSeter={presenterSeter1} />
        <div className="reactplayer-wrapper">
        <div className="player-text"><h1>In this video you can see one of the Yaskawa industrial robot during production.</h1></div>
          <ReactPlayer
            className="react-player"
            controls="true"
            url="https://www.youtube.com/watch?v=ByYNJl-oofM&ab_channel=RamziNofal"
          />
        </div>
        <Presenter presenterSeter={presenterSeter1} />
        <div class="lower-section3 section-divider3">
          <h3 className="exp-h3">
            Here you will find some information about the technical side of the
            website.
          </h3>
        </div>
      </div>
    );
  }
}

export default Experience;
