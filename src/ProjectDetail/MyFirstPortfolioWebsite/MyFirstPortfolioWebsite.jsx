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

import Desk from "./Assets/FirstPortfolio.png";
import HiFi from "./Assets/HomeHi.png";
import LoFi from "./Assets/HomeLo.png";
import MainBg from "./Assets/Peek.png";

const MyFirstPortfolioWebsite = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <img src={MainBg} alt="Background GIF" />
        <div className="container">
          <div className="main-content">
            <h1>My First Portfolio Website</h1>
            <h2>Made by Webflow</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>UI/UX Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Show my skills</p>
              </div>
              <div className="main-footer-content">
                <h4>Period</h4>
                <p>Mid 2021</p>
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
              In the current landscape, having a portfolio is essential for
              every web developer. Following the completion of my initial
              professional project, OneStockMed, I created this portfolio to
              effectively showcase my skills and projects at that point in time.
            </p>
          </div>
        </div>
      </section>

      <section className="development">
        <article className="container-half dev-phase">
          <div className="container">
            <h1 className="faded-heading">Colors</h1>
            <div className="content-offset">
              <div className="half-cols">
                <div className="left-half">
                  <p>
                    Why did I opt for these particular colors? Frankly, I
                    don&apos;t really have an answer for that. Maybe, I just
                    felt like it at that time. Or maybe they goes well with my
                    sweater &#128517;.
                  </p>
                </div>
                <div className="right-half">
                  <div className="right-half-colors">
                    <div
                      style={{ backgroundColor: "#FFAA71" }}
                      className="right-half-color"
                    />
                    <div
                      style={{ backgroundColor: "#1989AC" }}
                      className="right-half-color"
                    />

                    <div
                      style={{ backgroundColor: "#DBEDF3" }}
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
                  <p>
                    Using <span className="highlight">Figma</span>, I crafted
                    both low-fidelity and high-fidelity wireframes for the
                    envisioned portfolio.
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
                      <a href={LoFi}>
                        <img alt="Home Page Low Fidelity" src={LoFi} />
                      </a>
                      <a href={HiFi}>
                        <img alt="Home Page Hi Fidelity" src={HiFi} />
                      </a>
                    </LightGallery>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="container-half dev-phase">
          <div className="container">
            <h1 className="faded-heading">&lt;Dev&gt;</h1>
            <div className="content-offset">
              <div className="half-cols">
                <div className="left-half">
                  <p>
                    Given the portfolio&quot;s straightforward nature, I used{" "}
                    <span className="highlight"> Webflow </span> for its rapid
                    development capabilities. Also as one of my first project
                    ever, the final product turned out to be a bit different
                    than the Hi Fidelity Wireframe &#128517;.
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
                      <a href={Desk}>
                        <img alt="Desktop View of the Home Page" src={Desk} />
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
                href="https://gulshansankhyan.webflow.io/"
              >
                <button className="btn">
                  External Link
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

export default MyFirstPortfolioWebsite;
