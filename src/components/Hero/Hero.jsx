import React from "react";
import "./Hero.css";
import Header from "./Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The Best fitness Club In The Town </span>
        </div>
      </div>

      {/* hero heading */}
      <div className="hero-text">
      <div className="span">Shape</div>
      <div className="span">Your</div>
      </div>
      <div className="span">Ideal Body</div>
      <div className="right-h"></div>
    </div>
  );
};

export default Hero;
