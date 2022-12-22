import rightArrow from '../../assets/svg/right-arrow.svg'
import React from "react";
import { Link } from "react-router-dom";
import project from '../../assets/images/webdev.jpeg'

const Work = () => {
  return (
    <div className="work">
      <h2 className="work__title">
        Selected <span className="work__title--bolded">Works</span>
      </h2>
      <div className="work__cards">
        <div className="work__cards--card">
          <div className="col-1">
            <div className="col-1__img">
              <img src={project} alt="project__img" />
            </div>
          </div>
          <div className="col-2">
            <div className="col-2__content">
              <div className="col-2__content--title-description">
                <h4 className="content__title">REAL ESTATE TEMPLATE</h4>
                <p className="content__description">
                  Lorem ipsum, dolor sit amet consectetur
                  <span className="content__description--bold">
                    adipisicing elit. Quo sed sequi soluta dolor! Repellendus.
                  </span>
                </p>
              </div>
              <div className="col-2__content--stack">
                ReactJS, NodeJS, MongoDB, ExpressJS
              </div>
            </div>
            <Link to="/" className="col-2__btn">
              View Work <span><img src={rightArrow} alt="right arrow"/></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
