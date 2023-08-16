import { useParams } from "react-router-dom";
import Contact from "../Contact/Contact";
import Navigation from "../Navigation/Navigation";
import CurrentPortfolioWebsite from "./CurrentPortfolioWebsite/CurrentPortfolioWebsite";
import LacrosseVR from "./LacrosseVR/LacrosseVR";

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
          default:
            return <p>No project found</p>;
        }
      })()}
      <Contact />
    </div>
  );
};

export default ProjectDetails;
