import React, { Component } from "react";
import "./Education.css";
import Presenter from "../Presenter";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const presenterSeter1 = {
      title: "University of Debrecen",
      carouselItems: [
        "../education_5.jpeg",
        "../IMG_4832.PNG",
        "../IMG_4835.PNG",
      ],
      intro1: "Electrical Engineering, BScS",
      content1:
        "Established in 1538 in Debrecen, it is the oldest continuously operating institution of higher education in Hungary. During the years I studied electricity, digital electronics, programming and I fulfilled the requirements of the Automation specialisation that helped me to get my first job in engineering.",
      intro2: "Dissertation",
      content2:
        "My task was to create a microcontroller controlled RFID card reader, that could be used to scan the students' ID cards. For this project, I used an Atmel microcontroller, Atmel EEPROM, SL030 RFID reader/writer. All the data was stored in the EEPROM. I²C was used to connect the components.",
      bgcolor: "#f3f6f9",
    };

    const presenterSeter2 = {
      title: "Queen Mary University of London",
      carouselItems: [
        "../education_1.png",
        "./Screenshot from 2021-11-08 12-17-21.png",
      ],
      intro1: "Computer Science MSc ",
      content1:
        "I am grateful that I had the opportunity to study at Queen Mary University, which has the largest self-contained campus of any London-based Russell Group university. My modules contained Functional programming, Object-Oriented Programming, Database handling.",
      intro2: "Dissertation",
      content2:
        "My task was to develop an access control system with NFC tags. The system required an android application, esp WIFI microcontrollers, front-end and back-end applications and a MongoDB database running on a VPS. You can get a more detailed explanation on the Experience page. On the website, you can see the rooms' state (closed or not seen for a while since the controllers are offline) and the user list. But to access the full control panel an Admin login is required.",
    };

    return (
      <div className="education-wrapper">
        <Presenter presenterSeter={presenterSeter2} />
        <Presenter presenterSeter={presenterSeter1} />
        <div class="lower-section2 section-divider2">
          <h3 className="study-h3">
          I am happy that I had the opportunity to study in two countries.
          </h3>
        </div>
      </div>
    );
  }
}

export default Education;
