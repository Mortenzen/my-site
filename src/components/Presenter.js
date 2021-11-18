import React, { Component } from "react";
import "./Presenter.css";
import { Carousel } from "react-responsive-carousel";

class Presenter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var seter = this.props.presenterSeter;

    var colour = seter.bgcolor;
    var contentcolor = seter.color;
    let styles = {
      color: contentcolor, 
      backgroundColor: colour,
    };

    return (
      <div className="pres-wrapper" style={styles}>
        <div className="pres-picture">
          {" "}
          <Carousel className="carousel">
            {seter.carouselItems.map((item) => {
              return (
                <div>
                  <img src={item} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="pres-description">
          <h1>{seter.title}</h1> <h3>{seter.intro1}</h3>
          <p>{seter.content1}</p>
          <h3>{seter.intro2}</h3>
          <p>{seter.content2}</p>
        </div>
      </div>
    );
  }
}

export default Presenter;
