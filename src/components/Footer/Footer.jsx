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
            <a
              className="envelope"
              href="mailto:kaushalluffa91@gmail.com"
              target="_blank"
            >
              <FaEnvelope />
            </a>

            <a
              className="linkedin"
              href="https://linkedin.com/in/kaushalluffa"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="github"
              href="https://github.com/kaushalluffa"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="pdf"
              href="https://drive.google.com/file/d/1ko9RkZ1JEMRZMZo70SYoTBLgufweqtpz/view?usp=sharing"
              download
            >
              <FaFilePdf />
            </a>
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
