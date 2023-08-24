import { useParams } from "react-router-dom";
import Contact from "../Contact/Contact";
import Navigation from "../Navigation/Navigation";
import CurrentPortfolioWebsite from "./CurrentPortfolioWebsite/CurrentPortfolioWebsite";
import FinalProjectforComputerGraphicsandAnimationCourse from "./FinalProjectforComputerGraphicsandAnimationCourse/FinalProjectforComputerGraphicsandAnimationCourse";
import FloorcanInsights from "./FloorcanInsights/FloorcanInsights";
import LacrosseVR from "./LacrosseVR/LacrosseVR";
import TelePresence from "./TelePresence/TelePresence";

import "./ProjectDetails.scss";

const ProjectDetails = () => {
  const { projectName } = useParams();

  return (
    <div>
      <Navigation isModified="true" />
      {(() => {
        switch (projectName) {
          case "LacrosseVR":
            return <LacrosseVR />;
          case "CurrentPortfolioWebsite":
            return <CurrentPortfolioWebsite />;
          case "FinalProjectforComputerGraphicsandAnimationCourse":
            return <FinalProjectforComputerGraphicsandAnimationCourse />;
          case "FloorcanInsights":
            return <FloorcanInsights />;
          case "TelePresence":
            return <TelePresence />;
          default:
            return <p>No project found</p>;
        }
      })()}
      <Contact />
    </div>
  );
};

export default ProjectDetails;
