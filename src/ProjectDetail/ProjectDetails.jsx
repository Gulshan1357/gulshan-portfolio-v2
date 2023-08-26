import { useParams } from "react-router-dom";
import Contact from "../Contact/Contact";
import Navigation from "../Navigation/Navigation";
import ARTranscriptionandTranslation from "./ARTranscriptionandTranslation/ARTranscriptionandTranslation";
import CurrentPortfolioWebsite from "./CurrentPortfolioWebsite/CurrentPortfolioWebsite";
import FinalProjectforComputerGraphicsandAnimationCourse from "./FinalProjectforComputerGraphicsandAnimationCourse/FinalProjectforComputerGraphicsandAnimationCourse";
import FloorcanInsights from "./FloorcanInsights/FloorcanInsights";
import HumanAnatomyAR from "./HumanAnatomyAR/HumanAnatomyAR";
import LacrosseVR from "./LacrosseVR/LacrosseVR";
import MyFirstPortfolioWebsite from "./MyFirstPortfolioWebsite/MyFirstPortfolioWebsite";
import OneStockMed from "./OneStockMed/OneStockMed";
import Predictive from "./PredictiveModellingTooltoMoreEffectivelyTransitionPatientsfromHospital/PredictiveModellingTooltoMoreEffectivelyTransitionPatientsfromHospital";
import "./ProjectDetails.scss";
import StudyBuddyApp from "./StudyBuddyApp/StudyBuddyApp";
import TelePresence from "./TelePresence/TelePresence";
import VRWhiteboardApp from "./VRWhiteboardApp/VRWhiteboardApp";
import WealthManagement from "./WealthManagement/WealthManagement";

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
          case "ARTranscriptionandTranslation":
            return <ARTranscriptionandTranslation />;
          case "WealthManagement":
            return <WealthManagement />;
          case "PredictiveModellingTooltoMoreEffectivelyTransitionPatientsfromHospital":
            return <Predictive />;
          case "StudyBuddyApp":
            return <StudyBuddyApp />;
          case "VRWhiteboardApp":
            return <VRWhiteboardApp />;
          case "HumanAnatomyAR":
            return <HumanAnatomyAR />;
          case "OneStockMed":
            return <OneStockMed />;
          case "MyFirstPortfolioWebsite":
            return <MyFirstPortfolioWebsite />;
          default:
            return <p>No project found</p>;
        }
      })()}
      <Contact />
    </div>
  );
};

export default ProjectDetails;
