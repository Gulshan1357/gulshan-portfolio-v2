import { useState } from "react";
import { Link } from "react-router-dom";

import Flicking from "@egjs/react-flicking";

import "./ProjectCarousel.scss";
import useProjectFilter from "./useProjectFilter";

const ProjectsCarousel = () => {
  const [tag, setTag] = useState();
  const [projectList] = useProjectFilter(tag);

  return (
    <article id="projects">
      <h1>PROJECTS</h1>
      <div className="filters">
        <button onClick={() => setTag("All")}>All</button>
        <button onClick={() => setTag("Front-End")}>Front-End</button>
        <button onClick={() => setTag("XR")}>XR</button>
        <button onClick={() => setTag("Design")}>Design</button>
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
      >
        {projectList.map((project, index) => (
          <div key={index} className="carousel-item">
            <Link to={`/projectDetails/${project.name.replace(/\s+/g, "")}`}>
              <div className="carousel-item-linkArea">
                <h3>{project.name}</h3>
                <img src="/" alt="img" />

                <div className="tags">
                  {project.tags.map((tag) => (
                    <div className="tag" key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Flicking>
    </article>
  );
};

export default ProjectsCarousel;
