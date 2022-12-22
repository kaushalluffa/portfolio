import envelope from "../../assets/svg/envelope.svg";
import globe from "../../assets/svg/globe.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import github from "../../assets/svg/github.svg";
import pdf from "../../assets/svg/file.svg";
import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper--content">
          <div className="content">
            <h1 className="content__title">
              Get <span className="content__title--bold">in Touch.</span>
            </h1>
            <p className="content__description">
              So that we can talk more about...
            </p>
          </div>
          <div className="social-links">
            <span className="envelope">
              <img src={envelope} alt="envelope" />
            </span>
            <span className="envelope">
              <img src={globe} alt="globe" />
            </span>
            <span className="envelope">
              <img src={linkedin} alt="linkedin" />
            </span>
            <span className="envelope">
              <img src={github} alt="github" />
            </span>
            <span className="envelope">
              <img src={pdf} alt="pdf" />
            </span>
          </div>
        </div>
        <div className="footer__wrapper--references">
          <p className="me">Developed By: Kaushal Luffa</p>
          <p className="design">
            Design inspiration:{" "}
            <a href="https://www.figma.com/@srinivas_dezign">@Srinivas</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
