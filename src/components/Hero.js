import React from "react";
import "./Hero.css"

function Hero(props) {
  return (

    <div className='hero-container'>
    <video src="/video/molly.mp4" autoPlay loop muted />
    <h1>Thank You for Wisiting My Site</h1>
    <p>What are you waiting for?</p>
    
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
