import { useState } from "react";
import { Link } from "react-router-dom";

import Flicking from "@egjs/react-flicking";

import "./ProjectCarousel.scss";
import useProjectFilter from "./useProjectFilter";

const ProjectsCarousel = () => {
  const [tag, setTag] = useState();
  const [projectList] = useProjectFilter(tag);

  return (
    <article id="projects" className="projects">
      <div className="container">
        <h1 className="faded-heading">PROJECTS</h1>
        <div className="content-offset">
          <div className="filters">
            <button className="btn" onClick={() => setTag("All")}>
              All
            </button>
            <button className="btn" onClick={() => setTag("Front-End")}>
              Front-End
            </button>
            <button className="btn" onClick={() => setTag("XR")}>
              XR
            </button>
            <button className="btn" onClick={() => setTag("Design")}>
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
                <h3>{project.name}</h3>
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
