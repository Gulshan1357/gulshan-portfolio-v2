import { useEffect, useState } from "react";
import PeekTT from "../ProjectDetail/ARTranscriptionandTranslation/Assets/V3.png";
import PeekCPW from "../ProjectDetail/CurrentPortfolioWebsite/Assets/Peek.png";
import Peek6CG3 from "../ProjectDetail/FinalProjectforComputerGraphicsandAnimationCourse/Assets/Peek.png";
import PeekHos from "../ProjectDetail/Hospitality/Assets/Peek.jpg";
import PeekHA from "../ProjectDetail/HumanAnatomyAR/Assets/Peek.png";
import PeekLVR from "../ProjectDetail/LacrosseVR/AssetsLVR/Peek.png";
import PeekMFP from "../ProjectDetail/MyFirstPortfolioWebsite/Assets/Peek.png";
import PeekOSM from "../ProjectDetail/OneStockMed/Assets/Peek.png";
import PeekPMT from "../ProjectDetail/PredictiveModellingTooltoMoreEffectivelyTransitionPatientsfromHospital/Assets/Peek.png";
import PeekSB from "../ProjectDetail/StudyBuddyApp/Assets/Peek.png";
import PeekWB from "../ProjectDetail/VRWhiteboardApp/Assets/Peek.png";
import PeekWM from "../ProjectDetail/WealthManagement/Assets/Peek.gif";

const projectData = [
  {
    name: "Current Portfolio Website",
    period: "August 2023",
    tags: ["UI", "Front-End", "Full-Stack", "React", "Figma"],
    peek: PeekCPW,
  },
  {
    name: "Final Project for Computer Graphics and Animation Course",
    period: "July 2023",
    tags: ["Unity", "Shader Programming", "C#"],
    peek: Peek6CG3,
  },
  {
    name: "LacrosseVR",
    period: "Early 2023",
    tags: ["VR", "Unity", "C#"],
    peek: PeekLVR,
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
    peek: PeekWM,
  },
  {
    name: "AR Transcription and Translation",
    period: "Late 2022",
    tags: ["Front-End", "Angular", "JavaScript"],
    peek: PeekTT,
  },
  {
    name: "Predictive Modelling Tool to More Effectively Transition Patients from Hospital",
    period: "January to August 2022",
    tags: ["Design", "UX", "MATLAB"],
    peek: PeekPMT,
  },
  {
    name: "Study Buddy App",
    period: "Early 2022",
    tags: ["Full-Stack", "Ruby on Rails", "Ruby", "Bootstrap"],
    peek: PeekSB,
  },
  {
    name: "VR Whiteboard App",
    period: "Early 2022",
    tags: ["VR", "Unity", "C#"],
    peek: PeekWB,
  },
  {
    name: "Human Anatomy AR",
    period: "Early 2022",
    tags: ["AR", "Unity", "C#"],
    peek: PeekHA,
  },
  {
    name: "OneStockMed",
    period: "Late 2021",
    tags: ["UI", "Webflow", "Figma"],
    peek: PeekOSM,
  },
  {
    name: "My First Portfolio Website",
    period: "Mid 2021",
    tags: ["UI", "Webflow", "Figma"],
    peek: PeekMFP,
  },
  {
    name: "Hospitality",
    period: "2019",
    tags: ["Front-End", "Full-Stack", "ASP.NET", "JavaScript", "C#", "SQL"],
    peek: PeekHos,
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
