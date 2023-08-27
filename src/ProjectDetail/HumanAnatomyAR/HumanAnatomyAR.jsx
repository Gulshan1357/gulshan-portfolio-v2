import LightGallery from "lightgallery/react";
import { FaGithub } from "react-icons/fa";

import "lightgallery/scss/lg-autoplay.scss";
import "lightgallery/scss/lg-fullscreen.scss";
import "lightgallery/scss/lg-video.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";

import SS1 from "./Assets/1Organ.gif";
import SS2 from "./Assets/2Organ.gif";
import SS3 from "./Assets/3Organ.gif";
import SS4 from "./Assets/4Organ.gif";
import SS5 from "./Assets/5Organ.gif";

const HumanAnatomyAR = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <img src={SS5} loading="lazy" alt="Background GIF" />
        <div className="container">
          <div className="main-content">
            <h1>Human Anatomy AR</h1>
            <h2>A Unity Based Android Application</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>Unity Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Deliverable for &prime;AR, VR & MR&prime; course</p>
              </div>
              <div className="main-footer-content">
                <h4>Period</h4>
                <p>Early 2022</p>
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
              As part of the &prime;Augmented Reality, Virtual Reality & Mixed
              Reality&prime; course, I engaged in a mini project centered on
              Augmented Reality through smartphone cameras. The fundamental
              objective of this application was to offer a three-dimensional
              perspective of the organs depicted within a biology textbook.
            </p>
          </div>
        </div>
      </section>

      <section className="development">
        <article className="container-half dev-phase">
          <div className="container">
            <h1 className="faded-heading">&lt;Dev&gt;</h1>
            <div className="content-offset">
              <div className="half-cols">
                <div className="left-half">
                  <p>
                    User Actions:
                    <ul>
                      <li>Scan Human Organs using phone camera</li>
                      <li>Select organs from Menu</li>
                      <li>Rotate and Scale organs</li>
                      <li>Adjust Background music and Text-to-Speech volume</li>
                    </ul>
                  </p>
                </div>
                <div className="right-half">
                  <div className="right-half-images">
                    <LightGallery
                      speed={500}
                      plugins={[lgZoom, lgFullscreen, lgAutoplay, lgVideo]}
                      enableThumbSwipe={true}
                      loadYouTubeThumbnail={true}
                      licenseKey={
                        import.meta.env.MODE === "development"
                          ? "x"
                          : import.meta.env.LIGHTGALLERY_LICENCE
                      }
                    >
                      <a href={SS1}>
                        <img alt="Main Menu" loading="lazy" src={SS1} />
                      </a>
                      <a href={SS2}>
                        <img alt="Settings Menu" loading="lazy" src={SS2} />
                      </a>
                      <a href={SS3}>
                        <img alt="Heart" loading="lazy" src={SS3} />
                      </a>
                      <a href={SS4}>
                        <img alt="Lungs" loading="lazy" src={SS4} />
                      </a>
                      <a href={SS5}>
                        <img
                          alt="Object Tracking using AR camera"
                          loading="lazy"
                          src={SS5}
                        />
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Gulshan1357/Human-Anatomy-UnityAR"
              >
                <button className="btn">
                  GitHub
                  <FaGithub />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanAnatomyAR;
