import { FaArrowDown } from "react-icons/fa";
import React from "react";
import "./Hero.scss";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__blur-bg"></div>
      <h1 className="hero__content">
        I'm a front-end developer specializing in
        <span className="hero__content--bold"> UI/ReactJS</span> and
        <span className="hero__content--bold"> Functional Web Development</span>
      </h1>
      <div className="hero__icon">
        <FaArrowDown />
      </div>
    </section>
  );
};

export default Hero;
