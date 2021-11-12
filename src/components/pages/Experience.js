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
        ABB, FANUC [Programming in C if possible]. PLC programming: (smaller machines)\
        SIEMENS, Omron, [Programming in SCL if possible].",
    };
    const presenterSeter2 = {
      title: "Indeveyes",
      carouselItems: ["./Screenshot from 2021-11-12 15-54-00.png"],
      intro1: "Indeveyes.com",
      content1:
        "They help industrial and manufacturing companies see and understand\
         the context of machine data in production. ",
      intro2: "WordPress template redesigne",
      content2:
        "For more than a year I worked as a Robot/PLC programmer at the Robot X-Hungary Kft.\
         My duties included programming industrial robots, solving PLC programming tasks,\
        and project management responsibilities in various factories even abroad.\
        Robot programming: KUKA, Yaskawa,\
        ABB, FANUC [Programming in C if possible]. PLC programming: (smaller machines)\
        SIEMENS, Omron, [Programming in SCL if possible].",
    };
    const presenterSeter3 = {
      title: "Indeveyes",
      carouselItems: ["./Screenshot from 2021-11-12 15-54-00.png"],
      intro1: "Indeveyes.com",
      content1:
        "They help industrial and manufacturing companies see and understand\
         the context of machine data in production. ",
      intro2: "WordPress template redesigne",
      content2:
        "For more than a year I worked as a Robot/PLC programmer at the Robot X-Hungary Kft.\
         My duties included programming industrial robots, solving PLC programming tasks,\
        and project management responsibilities in various factories even abroad.\
        Robot programming: KUKA, Yaskawa,\
        ABB, FANUC [Programming in C if possible]. PLC programming: (smaller machines)\
        SIEMENS, Omron, [Programming in SCL if possible].",
        bgcolor: "#f3f6f9",
    };
   
    return (
      <div className="experience-wrapper">
        <Presenter presenterSeter={presenterSeter1} />
        <div className="reactplayer-wrapper">
          <div className="player-text">
            <h1>
              In this video will see a Yaskawa industrial robot that was
              programmer by me.
            </h1>
          </div>
          <ReactPlayer
            className="react-player"
            controls="true"
            url="https://www.youtube.com/watch?v=ByYNJl-oofM&ab_channel=RamziNofal"
          />
        </div>
        <Presenter presenterSeter={presenterSeter2} />
        <Presenter presenterSeter={presenterSeter3} />
        <div className="reactplayer-wrapper2">
          <div className="player-text2">
            <h1>
              In this video will see the mobile application, the admin UI, the
              ESP controllers during door opening requests.
            </h1>
          </div>
          <ReactPlayer
            className="react-player"
            controls="true"
            url="https://www.youtube.com/watch?v=NuMCND7rf_4&ab_channel=RamziNofal"
          />
        </div>
        <div class="lower-section3 section-divider3">
          <h3 className="exp-h3">
            Currently, I am working in the UK but not in engineering.
          </h3>
        </div>
      </div>
    );
  }
}

export default Experience;
