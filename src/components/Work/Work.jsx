import { FaGlobe, FaGithub } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import "./Work.scss";
import { request } from "graphql-request";
import { getHighlightedProjects, getProjects } from "../../queries";
import { useLocation } from "react-router-dom";
import StackIcons from "../Stack/StackIcons";
const Work = () => {
  const { pathname } = useLocation();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const projectsData = await request(
        import.meta.env.VITE_HYGRAPH_ENDPOINT,
        pathname === "/works" ? getProjects : getHighlightedProjects
      );
      setProjects((prev = []) => [
        ...prev,
        ...(projectsData?.highlightedProjects ?? projectsData?.projects),
      ]);
      setIsLoading(false);
    };
    fetchProjects();
  }, [pathname]);
  return (
    <section className="work">
      <h2 className="work__title">
        {pathname === "/works" ? "All" : "Highlighted"}
        <span className="work__title--bolded"> Projects</span>
      </h2>
      <div className="work__cards">
        {isLoading
          ? "Loading"
          : projects?.length > 0
          ? projects?.map((project) => (
              <div className="work__cards--card" key={project?.id}>
                <div className="col-1">
                  <div className="col-1__img">
                    <img
                      src={project?.projectThumbnail?.url}
                      alt="project__img"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <div className="col-2__content">
                    <div className="col-2__content--title-description">
                      <h5 className="content__title">
                        {project?.projectTitle}
                      </h5>
                      <p className="content__description">
                        <span className="content__description--bold">
                          {project?.projectDescription}
                        </span>
                      </p>
                    </div>
                    <div className="col-2__content--stack">
                      {project?.stack && project?.stack?.length > 0 && (
                        <StackIcons
                          stack={project?.stack ?? []}
                          hideLabel={true}
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-2__btn">
                    <a
                      target="_blank"
                      className="col-2__btn--link"
                      href={project?.projectGithubLink}
                    >
                      <FaGithub />
                    </a>
                    <a
                      target="_blank"
                      className="col-2__btn--link"
                      href={project?.projectDeployedVersion}
                    >
                      <FaGlobe />
                    </a>
                  </div>
                </div>
              </div>
            ))
          : "No Projects found"}
      </div>
    </section>
  );
};

export default Work;
