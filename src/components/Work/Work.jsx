import { FaGlobe, FaGithub } from "react-icons/fa";
import React from "react";
import "./Work.scss";
const Work = ({ projects, urlFor }) => {
  
  return (
    <section className="work" id="work">
      <h2 className="work__title">
        Selected <span className="work__title--bolded">Works</span>
      </h2>
      <div className="work__cards">
        {!projects
          ? "Loading"
          : projects?.map((project) => (
              <div className="work__cards--card" key={project?._id}>
                <div className="col-1">
                  <div className="col-1__img">
                    <img src={urlFor(project?.image)} alt="project__img" />
                  </div>
                </div>
                <div className="col-2">
                  <div className="col-2__content">
                    <div className="col-2__content--title-description">
                      <h4 className="content__title">{project?.name}</h4>
                      <p className="content__description">
                        {project?.one_line}{" "}
                        <span className="content__description--bold">
                          {project?.short_description}
                        </span>
                      </p>
                    </div>
                    <div className="col-2__content--stack">
                      {project?.stack?.map((s) => (
                        <span key={s}>{s}, </span>
                      ))}
                    </div>
                  </div>
                  <div className="col-2__btn">
                    <a
                      target="_blank"
                      className="col-2__btn--link"
                      href={project?.github_url}
                    >
                      <FaGithub />
                    </a>
                    <a
                      target="_blank"
                      className="col-2__btn--link"
                      href={project?.demo_url}
                    >
                      <FaGlobe />
                    </a>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Work;
