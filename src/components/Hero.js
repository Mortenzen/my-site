import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/video/molly.mp4" autoPlay loop muted playsInline />
      <h1>Thank You for Visiting My Site</h1>
    </div>
  );
}

export default Hero;
