import Stack from "../Stack/Stack";
import "./About.scss";
const About = ({ developerData }) => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="col-1">
          <h4 className="col-1__title">A BIT ABOUT ME</h4>
          <p className="col-1__description">{developerData?.shortDesc ?? ""}</p>
        </div>
        <div className="col-2">
          <div className="col-2__imgs">
            {developerData?.shortDescMedia?.map((m) => (
              <div className="col-2__imgs--image" key={m?.id}>
                <img src={m?.url} alt={m?.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Stack stack={developerData?.stack} />
    </div>
  );
};

export default About;
