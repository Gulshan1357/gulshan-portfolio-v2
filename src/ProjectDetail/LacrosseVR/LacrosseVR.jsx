/* eslint-disable jsx-a11y/anchor-is-valid */
import LightGallery from "lightgallery/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import "lightgallery/scss/lg-autoplay.scss";
import "lightgallery/scss/lg-fullscreen.scss";
import "lightgallery/scss/lg-video.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";

import videoBgLVR from "./Assets/VideoLVR.mp4";
import VideoThumb from "./Assets/Videothumb.gif";

const LacrosseVR = () => {
  // const LIGHTGALLERY_LICENCE = process.env.LIGHTGALLERY_LICENCE;
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
              Our team&apos;s objective was to demonstrate the potential of
              Virtual Reality at the North American Indigenous Games 2023
              (NAIG), scheduled for July 2023 in Nova Scotia. Aligned with the
              event&apos;s theme, we chose to develop a project centered around
              the sport of lacrosse. The project was structured into two
              distinct segments: firstly, an exploration of lacrosse&apos;s
              historical roots, and secondly, an interactive experience allowing
              users to engage in various lacrosse games.
            </p>
            <br />
            <p>
              Although I departed from the team in April, I was an active
              contributor. During my involvement, I specifically focused on
              <span className="highlight">
                {" "}
                creating and testing the shooting mechanism{" "}
              </span>
              for the game.
            </p>
          </div>
        </div>
      </section>

      <section className="development">
        <article className="container-half dev-phase">
          <div className="container">
            <h1 className="faded-heading">&lt;dev&gt;</h1>
            <div className="content-offset">
              <div className="half-cols">
                <div className="left-half">
                  <p>
                    During the development phase, I harnessed the capabilities
                    of Unity&apos;s new XR Interaction Toolkit to emulate both
                    single-handed and double-handed throwing actions within the
                    VR environment. I introduced{" "}
                    <span className="highlight">
                      {" "}
                      two distinct throwing mechanisms{" "}
                    </span>{" "}
                    to enhance the user experience.
                  </p>
                  <br />
                  <p>
                    In the initial approach, the user{" "}
                    <span className="highlight"> triggers </span>the ball&apos;s
                    release by pressing a designated button. In contrast, the
                    second method operates by detecting the{" "}
                    <span className="highlight">
                      {" "}
                      user&apos;s throwing motion
                    </span>
                    . Specifically, the ball is released once the user&apos;s
                    throwing motion generates angular velocity that surpasses a
                    predefined threshold. This dynamic interaction adds a layer
                    of realism and engagement to the VR experience, enhancing
                    the immersion of the lacrosse game.
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
                      <a
                        data-src="https://vimeo.com/857632800"
                        data-sub-html="<h4>Lacrosse VR</h4><p>Testing shooting Mechanism</p>"
                      >
                        <img
                          src={VideoThumb}
                          loading="lazy"
                          alt="Video thumbnail"
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
                href="https://www.linkedin.com/posts/design-de-plume_ddp-x-rbc-10th-north-american-indigenous-activity-7095403465618706433-unh_?utm_source=share&utm_medium=member_desktop"
              >
                <button className="btn">
                  LinkedIn Post by Design de Plume Inc.
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

export default LacrosseVR;
