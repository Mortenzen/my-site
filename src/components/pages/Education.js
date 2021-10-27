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
        "https://upload.wikimedia.org/wikipedia/commons/7/73/DebrecenDSCN3583.JPG",
        "https://thumbs.dreamstime.com/b/inside-impressive-main-building-university-debrecen-inside-impressive-main-building-university-153622410.jpg",
        "https://www.iperionhs.eu/wp-content/uploads/2016/10/MTA_Atomki_intro_picture.jpg",
      ],
      intro:
        "Szoveg tesztnek. Duck tales ..... Szoveg tesztnek. Duck tales .....  Szoveg tesztnek. Duck tales ..... ",
      content:
        "Szoveg tesztnek. Duck tales ..... Szoveg tesztnek. Duck tales ..... Szoveg tesztnek. Duck tales ..... Szoveg tesztnek. Duck tales ..... Szoveg tesztnek. Duck tales ..... ",
    };

    const presenterSeter2 = {
      title: "DOGO",
      carouselItems: [
        "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2017-10/queen-mary-building-exterior.png?itok=P6wcvnDl",
        "https://www.qmul.ac.uk/media/qmul/research/images/Discover-banner-image.jpg",
      ],
      intro:
        "Szoveg tesztnek. Duck tales ..... Szoveg tesztnek. Duck tales .....  Szoveg tesztnek. Duck tales ..... ",
      content:
        "Szoveg tesztnek. Duck tales ..... Szoveg tesztnek. Duck tales ..... Szoveg tesztnek. Duck tales ..... Szoveg tesztnek. Duck tales ..... Szoveg tesztnek. Duck tales ..... ",
      bgcolor: "#f3f6f9",
    };

    return (
      <div className="education-wrapper">
        <Presenter presenterSeter={presenterSeter1} />
        <Presenter presenterSeter={presenterSeter2} />
        <div class="lower-section2 section-divider2">
          <h3 className="study-h3">
            Here you will find some information about the technical side of the
            website.
          </h3>
        </div>
      </div>
    );
  }
}

export default Education;
