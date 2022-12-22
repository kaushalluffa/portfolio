import downArrow from "../../assets/svg/down-arrow.svg";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__content">
        I'm a front-end developer specializing in{" "}
        <span className="hero__content--bold">UI/ReactJS</span> and
        <span className="hero__content--bold">Functional Web Development</span>
      </h1>
      <div className="hero__icon">
        <span>
          <img src={downArrow} alt="down arrow" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
