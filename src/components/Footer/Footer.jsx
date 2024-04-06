import {
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaFilePdf,
} from "react-icons/fa";
import "./Footer.scss";

const Footer = ({ developerData }) => {
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
            {developerData?.email && (
              <a
                className="envelope"
                href={`mailto:${developerData?.email}`}
                target="_blank"
              >
                <FaEnvelope />
              </a>
            )}

            {developerData?.linkedinUrl && (
              <a
                className="linkedin"
                href={developerData?.linkedinUrl ?? ""}
                target="_blank"
              >
                <FaLinkedin />
              </a>
            )}
            {developerData?.githubUrl && (
              <a
                className="github"
                href={developerData?.githubUrl ?? ""}
                target="_blank"
              >
                <FaGithub />
              </a>
            )}
            {developerData?.resume && (
              <a className="pdf" href={developerData?.resume?.url} download>
                <FaFilePdf />
              </a>
            )}
          </div>
        </div>
        <div className="footer__wrapper--references">
          <p className="me">
            Developed By: <span className="name">Code Mastery</span>
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
