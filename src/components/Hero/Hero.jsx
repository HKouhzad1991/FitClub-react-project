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
      <div className="right-h"></div>
    </div>
  );
};

export default Hero;
