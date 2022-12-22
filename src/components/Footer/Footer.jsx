import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

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
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
            <FontAwesomeIcon icon="fa-solid fa-globe" />
            <FontAwesomeIcon icon="fa-brands fa-github" />
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            <FontAwesomeIcon icon="fa-solid fa-file" />
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
}

export default Footer