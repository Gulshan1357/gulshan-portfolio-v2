import { useEffect, useState } from "react";

const projectData = [
  {
    name: "Current Portfolio Website",
    period: "August 2023",
    tags: ["UI", "Front-End", "Full-Stack", "React", "Figma"],
  },
  {
    name: "Final Project for Computer Graphics and Animation Course",
    period: "July 2023",
    tags: ["Unity", "Shader Programming", "C#"],
  },
  {
    name: "LacrosseVR",
    period: "Early 2023",
    tags: ["VR", "Unity", "C#"],
  },
  {
    name: "Floorcan Insights",
    period: "Early 2023",
    tags: ["UI", "Front-End", "React", "JavaScript", "Figma"],
  },
  {
    name: "TelePresence",
    period: "Early 2023",
    tags: ["Front-End", "Full-Stack", "React", "JavaScript"],
  },
  {
    name: "Wealth Management",
    period: "Late 2022 and Early 2023",
    tags: ["AR", "Unity", "C#"],
  },
  {
    name: "AR Transcription and Translation",
    period: "Late 2022",
    tags: ["Front-End", "Angular", "JavaScript"],
  },
  {
    name: "Predictive modelling tool to more effectively transition patients from hospital",
    period: "January to August 2022",
    tags: ["Design", "UX", "MATLAB"],
  },
  {
    name: "Study Buddy App",
    period: "Early 2022",
    tags: ["Full-Stack", "Ruby on Rails", "Ruby", "Bootstrap"],
  },
  {
    name: "VR Whiteboard App",
    period: "Early 2022",
    tags: ["VR", "Unity", "C#"],
  },
  {
    name: "Human Anatomy AR",
    period: "Early 2022",
    tags: ["AR", "Unity", "C#"],
  },
  {
    name: "OneStockMed",
    period: "Late 2021",
    tags: ["UI", "Webflow", "Figma"],
  },
  {
    name: "My First Portfolio Website",
    period: "Mid 2021",
    tags: ["UI", "Webflow", "Figma"],
  },
  {
    name: "Hospitaly",
    period: "2019",
    tags: ["Front-End", "Full-Stack", "ASP.NET", "JavaScript", "C#", "SQL"],
  },
];

const useProjectFilter = (tag) => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    if (!tag || tag == "All") {
      setProjectList(projectData);
    } else if (tag == "XR") {
      let filteredArrayOfProjects = projectData.filter(
        (project) =>
          project.tags.includes("XR") ||
          project.tags.includes("AR") ||
          project.tags.includes("VR") ||
          project.tags.includes("MR"),
      );
      setProjectList(filteredArrayOfProjects);
    } else if (tag == "Design") {
      let filteredArrayOfProjects = projectData.filter(
        (project) =>
          project.tags.includes("Design") ||
          project.tags.includes("UI") ||
          project.tags.includes("UX"),
      );
      setProjectList(filteredArrayOfProjects);
    } else {
      {
        let filteredArrayOfProjects = projectData.filter((project) =>
          project.tags.includes(tag),
        );
        setProjectList(filteredArrayOfProjects);
      }
    }
  }, [tag]);

  return [projectList];
};

export default useProjectFilter;
