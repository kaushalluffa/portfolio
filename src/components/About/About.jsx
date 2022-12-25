import React from "react";
import webDevImg from '../../assets/images/webdev.jpeg'
import musicImg from '../../assets/images/music.jpeg'
import travelImg from '../../assets/images/travel.jpeg'
import gameImg from '../../assets/images/game.jpeg'
import './About.scss'
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__wrapper">
        <div className="col-1">
          <h4 className="col-1__title">A BIT ABOUT ME</h4>
          <p className="col-1__description">
            I am a front-end developer who is passionate about creating
            <span className="col-1__description--bold">{" "}
              beautiful and functional digital experiences. Besides development,
              I love games, travelling and music.
            </span>
          </p>
        </div>
        <div className="col-2">
            <div className="col-2__imgs">
              <div className="col-2__imgs--image">
                <img src={webDevImg} alt="web development photo"/>
              </div>
              <div className="col-2__imgs--image">
                <img src={musicImg} alt="web development photo"/>
              </div>
              <div className="col-2__imgs--image">
                <img src={travelImg} alt="web development photo"/>
              </div>
              <div className="col-2__imgs--image">
                <img src={gameImg} alt="web development photo"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
