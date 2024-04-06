import { FaArrowDown } from "react-icons/fa";
import "./Hero.scss";
const Hero = ({ developerData }) => {
  return (
    <section className="hero">
      <div className="hero__blur-bg"></div>
      <p className="hero__content">{developerData?.tagLine ?? ""}</p>
      <div className="hero__icon">
        <FaArrowDown />
      </div>
    </section>
  );
};

export default Hero;
