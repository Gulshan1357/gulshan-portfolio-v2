import { FaExternalLinkAlt } from "react-icons/fa";

import "lightgallery/scss/lg-autoplay.scss";
import "lightgallery/scss/lg-fullscreen.scss";
import "lightgallery/scss/lg-video.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

import MainBG from "./Assets/Peek.png";

const PredictiveModellingTooltoMoreEffectivelyTransitionPatientsfromHospital =
  () => {
    return (
      <div>
        <main className="project-main">
          <div className="overlay"></div>
          <img src={MainBG} loading="lazy" alt="Background GIF" />
          <div className="container">
            <div className="main-content">
              <h1>Predictive Modelling Tool</h1>
              <h2>to more effectively transition patients from Hospital</h2>
              <div className="main-footer">
                <div className="main-footer-content">
                  <h4>Role</h4>
                  <p>User eXperience Designer</p>
                </div>
                <div className="main-footer-content">
                  <h4>Contex</h4>
                  <p>Improve patient&apos;s journey to ALC</p>
                </div>
                <div className="main-footer-content">
                  <h4>Period</h4>
                  <p>January to August 2022</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <section className="container-full">
          <div className="container">
            <h1 className="faded-heading">Why?</h1>
            <div className="content-offset">
              <p>
                In the scenario where a patient requires care beyond the
                hospital setting, they often transition to an Alternate Level of
                Care (ALC) destination such as Long-Term Care. This transition,
                however, presents several challenges. Patient experience is
                marked by uncertainty in the discharge process, coupled with
                extended waiting times. Our objective was to{" "}
                <span className="highlight">
                  {" "}
                  enhance this ALC discharge journey by introducing a Predictive
                  Modeling Tool{" "}
                </span>
                . This tool would foresee potential discharge destinations and
                estimate the anticipated length of stay for each patient,
                streamlining the process for all stakeholders involved.
              </p>
            </div>
          </div>
        </section>

        <section className="container-full">
          <div className="container">
            <h1 className="faded-heading">Design</h1>
            <div className="content-offset">
              <p>
                The 8-month duration of our project journey can be effectively
                segmented into the subsequent stages:
              </p>
              <br />
              <ul>
                <li className="large-li">
                  <span className="highlight">
                    Understanding the ALC Process:{" "}
                  </span>
                  We embarked on comprehensive interviews with medical
                  professionals from SJHH (St. Joseph&apos;s Healthcare
                  Hamilton), not solely to grasp the ALC process intricacies,
                  but also to understand the distinct conditions guiding
                  patients to specific ALC destinations. To ensure precision in
                  our understanding and to ask pertinent questions, we
                  translated the entire process into a MatLab Simulation Model
                  incorporating logic gates.
                </li>
                <br />
                <li className="large-li">
                  <span className="highlight">
                    Stakeholder and User Insights:{" "}
                  </span>{" "}
                  While a multitude of stakeholders were involved, our primary
                  focus lay on Patients and Hospital Administrations as target
                  users.
                </li>
                <br />
                <li className="large-li">
                  <span className="highlight">
                    Synthesizing Design Research:{" "}
                  </span>{" "}
                  Our approach encompassed engaging with patients, medical
                  professionals, and Hospital Management to uncover pain points
                  and accumulate valuable insights.
                </li>
                <br />
                <li className="large-li">
                  <span className="highlight">Iterative Prototyping: </span>{" "}
                  Along with stakeholder interviews, we initiated the creation
                  and continuous refinement of prototypes to parallelly inform
                  them our design process and get their feedback.
                </li>
                <br />
                <li className="large-li">
                  <span className="highlight">Final Deliverables: </span>We
                  presented the culmination of findings to our professors and
                  Stakeholders from SJHH. This included an enhanced ALC
                  discharge journey map alongside a Low-Fidelity wireframe for a
                  Mobile App. This app is envisioned to provide patients with
                  data on possible waiting times and discharge destinations
                  within the ALC framework.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container-full">
          <div className="container">
            <h1 className="faded-heading">Links</h1>
            <div className="content-offset">
              <div className="btns">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/presentation/d/1I9sdluconem0y8Ru0k0bQQbsndsdkwQJRHLYrJc6E9Y/edit?usp=sharing"
                >
                  <button className="btn">
                    Project Presentation
                    <FaExternalLinkAlt />
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/presentation/d/1Z7zn27QIQoojsEetS_LAPrJ5_RgdaVYx/edit?usp=sharing&ouid=110051292061250698391&rtpof=true&sd=true"
                >
                  <button className="btn">
                    Project Poster
                    <FaExternalLinkAlt />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

export default PredictiveModellingTooltoMoreEffectivelyTransitionPatientsfromHospital;
