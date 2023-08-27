import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

import ScrollToTop from "./scrollToTop";

import "./ProjectDetails.scss";

import LoadingContentAnimation from "../LoadingAnimation/LoadingContent";
import LoadingPageAnimation from "../LoadingAnimation/LoadingPage";
import Navigation from "../Navigation/Navigation";

//Lazy Loading components
const Contact = lazy(() => import("../Contact/Contact"));
const ARTranscriptionandTranslation = lazy(() =>
  import("./ARTranscriptionandTranslation/ARTranscriptionandTranslation"),
);
const CurrentPortfolioWebsite = lazy(() =>
  import("./CurrentPortfolioWebsite/CurrentPortfolioWebsite"),
);
const FinalProjectforComputerGraphicsandAnimationCourse = lazy(() =>
  import(
    "./FinalProjectforComputerGraphicsandAnimationCourse/FinalProjectforComputerGraphicsandAnimationCourse"
  ),
);
const FloorcanInsights = lazy(() =>
  import("./FloorcanInsights/FloorcanInsights"),
);
const Hospitality = lazy(() => import("./Hospitality/Hospitality"));
const HumanAnatomyAR = lazy(() => import("./HumanAnatomyAR/HumanAnatomyAR"));
const LacrosseVR = lazy(() => import("./LacrosseVR/LacrosseVR"));
const MyFirstPortfolioWebsite = lazy(() =>
  import("./MyFirstPortfolioWebsite/MyFirstPortfolioWebsite"),
);
const OneStockMed = lazy(() => import("./OneStockMed/OneStockMed"));
const Predictive = lazy(() =>
  import(
    "./PredictiveModellingTooltoMoreEffectivelyTransitionPatientsfromHospital/PredictiveModellingTooltoMoreEffectivelyTransitionPatientsfromHospital"
  ),
);
const StudyBuddyApp = lazy(() => import("./StudyBuddyApp/StudyBuddyApp"));
const TelePresence = lazy(() => import("./TelePresence/TelePresence"));
const VRWhiteboardApp = lazy(() => import("./VRWhiteboardApp/VRWhiteboardApp"));
const WealthManagement = lazy(() =>
  import("./WealthManagement/WealthManagement"),
);

const ProjectDetails = () => {
  const { projectName } = useParams();

  return (
    <div>
      <ScrollToTop />
      <Navigation isModified="true" />

      {(() => {
        switch (projectName) {
          case "LacrosseVR":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <LacrosseVR />
              </Suspense>
            );
          case "CurrentPortfolioWebsite":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <CurrentPortfolioWebsite />
              </Suspense>
            );
          case "FinalProjectforComputerGraphicsandAnimationCourse":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <FinalProjectforComputerGraphicsandAnimationCourse />
              </Suspense>
            );
          case "FloorcanInsights":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <FloorcanInsights />
              </Suspense>
            );
          case "TelePresence":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <TelePresence />
              </Suspense>
            );
          case "ARTranscriptionandTranslation":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <ARTranscriptionandTranslation />
              </Suspense>
            );
          case "WealthManagement":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <WealthManagement />
              </Suspense>
            );
          case "PredictiveModellingTooltoMoreEffectivelyTransitionPatientsfromHospital":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <Predictive />
              </Suspense>
            );
          case "StudyBuddyApp":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <StudyBuddyApp />
              </Suspense>
            );
          case "VRWhiteboardApp":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <VRWhiteboardApp />
              </Suspense>
            );
          case "HumanAnatomyAR":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <HumanAnatomyAR />
              </Suspense>
            );
          case "OneStockMed":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <OneStockMed />
              </Suspense>
            );
          case "MyFirstPortfolioWebsite":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <MyFirstPortfolioWebsite />
              </Suspense>
            );
          case "Hospitality":
            return (
              <Suspense fallback={<LoadingPageAnimation />}>
                <Hospitality />
              </Suspense>
            );
          default:
            return <p>No project found</p>;
        }
      })()}

      <Suspense fallback={<LoadingContentAnimation type="Contact" />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default ProjectDetails;
