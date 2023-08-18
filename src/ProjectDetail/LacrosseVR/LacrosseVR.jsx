import LightGallery from "lightgallery/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import SS1 from "./Assets/SS (1).png";
import SS2 from "./Assets/SS (2).png";
import SS3 from "./Assets/SS (3).png";
import SS4 from "./Assets/SS (4).png";
import SS5 from "./Assets/SS (5).png";
import SS6 from "./Assets/SS (6).png";
import videoBgLVR from "./Assets/VideoLVR.mp4";
// import "./LacrosseVR.scss";

const LacrosseVR = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <video src={videoBgLVR} autoPlay loop muted />
        <div className="container">
          <div className="main-content">
            <h1>Lacrosse VR</h1>
            <h2>A Virtual Reality Game</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>XR Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Show VR in Indegenous Games</p>
              </div>
              <div className="main-footer-content">
                <h4>Period</h4>
                <p>Early 2023</p>
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
              The problem was Lorem ipsum. THe problem was Lorem ipsum and this.
              THe problem was Lorem ipsum and this. THe problem was Lorem ipsum
              and this.
            </p>
          </div>
        </div>
      </section>

      <section className="development">
        <article className="container-half dev-phase">
          <div className="container">
            <h1 className="faded-heading">Branding</h1>
            <div className="content-offset">
              <div className="half-cols">
                <div className="left-half">
                  <p>
                    Decided to go with these colors. Because of ease of reasons.
                  </p>
                </div>
                <div className="right-half">
                  <div className="right-half-colors">
                    <div
                      style={{ backgroundColor: "#7e3b96" }}
                      className="right-half-color"
                    />
                    <div
                      style={{ backgroundColor: "#7e3b96" }}
                      className="right-half-color"
                    />
                    <div
                      style={{ backgroundColor: "#7e3b96" }}
                      className="right-half-color"
                    />
                    <div
                      style={{ backgroundColor: "#7e3b96" }}
                      className="right-half-color"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="container-half dev-phase">
          <div className="container">
            <h1 className="faded-heading">Design</h1>
            <div className="content-offset">
              <div className="half-cols">
                <div className="left-half">
                  <p>LoFI and HiFI Wireframes. Any prototyping changes. etc.</p>
                </div>
                <div className="right-half">
                  <div className="right-half-images">
                    <LightGallery
                      speed={500}
                      plugins={[lgZoom]}
                      enableThumbSwipe={true}
                      loadYouTubeThumbnail={true}
                    >
                      <a href={SS2}>
                        <img alt="img1" src={SS2} />
                      </a>
                      <a href={SS3}>
                        <img alt="img1" src={SS3} />
                      </a>
                      <a href={SS4}>
                        <img alt="img1" src={SS4} />
                      </a>
                      <a href={SS1}>
                        <img alt="img1" src={SS1} />
                      </a>
                      <a href={SS5}>
                        <img alt="img1" src={SS5} />
                      </a>
                      <a href={SS6}>
                        <img alt="img1" src={SS6} />
                      </a>
                    </LightGallery>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="container-full">
        <div className="container">
          <h1 className="faded-heading">Links</h1>
          <div className="content-offset">
            <div className="btns">
              <button className="btn">
                External Link
                <FaExternalLinkAlt />
              </button>
              <button className="btn">
                GitHub
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LacrosseVR;
