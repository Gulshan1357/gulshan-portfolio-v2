import { useState } from "react";
import { Link } from "react-router-dom";

import Flicking from "@egjs/react-flicking";

import "./ProjectCarousel.scss";
import useProjectFilter from "./useProjectFilter";

const ProjectsCarousel = () => {
  const [tag, setTag] = useState();
  const [activeBtn, setActiveBtn] = useState("btnAll");
  const [projectList] = useProjectFilter(tag);

  const handleBtnClick = (event) => {
    switch (event.target.id) {
      case "btnAll": {
        setTag("All");
        setActiveBtn(event.target.id);
        break;
      }
      case "btnFrontEnd": {
        setTag("Front-End");
        setActiveBtn(event.target.id);
        break;
      }
      case "btnXR": {
        setTag("XR");
        setActiveBtn(event.target.id);
        break;
      }
      case "btnDesign": {
        setTag("Design");
        setActiveBtn(event.target.id);
        break;
      }
      default: {
        setTag("All");
        setActiveBtn("btnAll");
        break;
      }
    }
  };

  return (
    <article id="projects" className="projects">
      <div className="container">
        <h1 className="faded-heading">PROJECTS</h1>
        <div className="content-offset">
          <div className="filters">
            <button
              className={activeBtn === "btnAll" ? "btn btn-active" : "btn"}
              id="btnAll"
              onClick={handleBtnClick}
            >
              All
            </button>
            <button
              className={activeBtn === "btnFrontEnd" ? "btn btn-active" : "btn"}
              id="btnFrontEnd"
              onClick={handleBtnClick}
            >
              Front-End
            </button>
            <button
              className={activeBtn === "btnXR" ? "btn btn-active" : "btn"}
              id="btnXR"
              onClick={handleBtnClick}
            >
              XR
            </button>
            <button
              className={activeBtn === "btnDesign" ? "btn btn-active" : "btn"}
              id="btnDesign"
              onClick={handleBtnClick}
            >
              Design
            </button>
          </div>

          <Flicking
            className="carousel"
            horizontal={true}
            renderOnlyVisible={true}
            align={"prev"}
            moveType={"freeScroll"}
            bound={true}
            interruptable={true}
            bounce={"20%"}
            preventClickOnDrag={true}
          >
            {projectList.map((project, index) => (
              <div key={index} className="carousel-item">
                <Link
                  to={`/projectDetails/${project.name.replace(/\s+/g, "")}`}
                >
                  <img
                    loading="lazy"
                    src={project.peek}
                    alt="Project's peak shot"
                  />
                </Link>
                <Link
                  to={`/projectDetails/${project.name.replace(/\s+/g, "")}`}
                >
                  <h3>{project.name}</h3>
                </Link>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <div className="tag" key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Flicking>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCarousel;
