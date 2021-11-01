import React from "react";
import "./Hero.css"

function Hero(props) {
  return (

    <div className='hero-container'>
    <video src="/video/molly.mp4" autoPlay loop muted playsInline/>
    <h1>Thank You for Visiting My Site</h1>
 
    
     {/*
    <div className="hero-container">
      <div className="hero-text"></div>
      <div className="hero-picture "></div>
    </div>
  */}
  </div>
 
  );
}

export default Hero;
