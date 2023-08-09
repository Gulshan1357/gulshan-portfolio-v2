import { useState } from "react";
import useProjectFilter from "./useProjectFilter";

const ProjectsCarousel = () => {
  const [tag, setTag] = useState();
  const [projectList] = useProjectFilter(tag);

  return (
    <article>
      <h1>PROJECTS</h1>
      <div className="filters">
        <button onClick={() => setTag("All")}>All</button>
        <button onClick={() => setTag("Front-End")}>Front-End</button>
        <button onClick={() => setTag("XR")}>XR</button>
        <button onClick={() => setTag("Design")}>Design</button>
      </div>

      <div className="carousel">
        {projectList.map((project) => (
          <div className="carousel-item" key={project.name}>
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
        ))}
      </div>
    </article>
  );
};

export default ProjectsCarousel;
