import {
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaFilePdf,
} from "react-icons/fa";
import "./Footer.scss";

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
              <FaEnvelope />
            </span>
            <span className="globe">
              <FaGlobe />
            </span>
            <span className="linkedin">
              <FaLinkedin />
            </span>
            <span className="github">
              <FaGithub />
            </span>
            <span className="pdf">
              <FaFilePdf />
            </span>
          </div>
        </div>
        <div className="footer__wrapper--references">
          <p className="me">
            Developed By: <span className="name">Kaushal Luffa</span>
          </p>
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
