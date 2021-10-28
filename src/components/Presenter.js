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
    let styles = {
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
          <h1>{seter.title}</h1> <h3>{seter.intro}</h3>
          <p>{seter.content}</p>
        </div>
      </div>
    );
  }
}

export default Presenter;
