import LightGallery from "lightgallery/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import "lightgallery/scss/lg-autoplay.scss";
import "lightgallery/scss/lg-fullscreen.scss";
import "lightgallery/scss/lg-video.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";

import GPort1 from "./Assets/GulshanPortfolio1.png";
import GPort2 from "./Assets/GulshanPortfolio2.png";
import HeroBG from "./Assets/Hero.gif";
import HomeLo from "./Assets/Home Lo.png";
import HomeHi from "./Assets/HomePage Hi.png";
import ProjectLo from "./Assets/Project Lo.png";
import ProjectHi from "./Assets/ProjectDetails Hi.png";

const CurrentPortfolioWebsite = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <img src={HeroBG} alt="Background GIF" />
        <div className="container">
          <div className="main-content">
            <h1>Current Portfolio</h1>
            <h2>A React Based Web Application</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>Full-Stack Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Show my skills</p>
              </div>
              <div className="main-footer-content">
                <h4>Period</h4>
                <p>August 2023</p>
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
              Why did I decide to craft a new portfolio website? Well, my
              previous website had aged considerably and fell short of
              effectively presenting my current prowess and accomplishments as a
              developer. With this fresh and innovative website, I not only
              address these shortcomings but also delve further to encompass a
              broader array of my capabilities and experiences.
            </p>
          </div>
        </div>
      </section>

      <article className="container-half dev-phase">
        <div className="container">
          <h1 className="faded-heading">Tools & Tech</h1>
          <div className="content-offset">
            <div className="half-cols">
              <div className="left-half">
                <div className="left-half-text">
                  <p>
                    Design
                    <ul>
                      <li>Pen & Paper</li>
                      <li>Figma</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="right-half">
                <div className="right-half-text">
                  <p>
                    Development
                    <ul>
                      <li>SCSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="development">
        <article className="container-half dev-phase">
          <div className="container">
            <h1 className="faded-heading">Colors</h1>
            <div className="content-offset">
              <div className="half-cols">
                <div className="left-half">
                  <p>
                    Why did I opt for these particular colors? Frankly, I
                    derived inspiration for these hues from an image I created
                    using the Stable Diffusion model. This very image takes
                    center stage as the main hero image on the homepage. My
                    intention was to establish a harmonious connection between
                    the website&apos;s color palette and the tones found within
                    that image.
                  </p>
                </div>
                <div className="right-half">
                  <div className="right-half-colors">
                    <div
                      style={{ backgroundColor: "#7e3b96" }}
                      className="right-half-color"
                    />
                    <div
                      style={{ backgroundColor: "#EF7A44" }}
                      className="right-half-color"
                    />
                    <div
                      style={{ backgroundColor: "rgba(239, 240, 240, 0.80)" }}
                      className="right-half-color"
                    />
                    <div
                      style={{ backgroundColor: "#616767" }}
                      className="right-half-color"
                    />
                    <div
                      style={{ backgroundColor: "#0A1111" }}
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
                    envisioned portfolio. Drawing inspiration from the layout of
                    some of the most prominent developer portfolios, I strived
                    to capture the essence of their structuring while infusing
                    my unique touch into the design.
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
                      <a href={HomeLo}>
                        <img alt="Home Page Low Fidelity" src={HomeLo} />
                      </a>
                      <a href={ProjectLo}>
                        <img
                          alt="ProjectDetails Page Low Fidelity"
                          src={ProjectLo}
                        />
                      </a>
                      <a href={HomeHi}>
                        <img alt="Home Page High Fidelity" src={HomeHi} />
                      </a>

                      <a href={ProjectHi}>
                        <img
                          alt="ProjectDetails Page High Fidelity"
                          src={ProjectHi}
                        />
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
                    I evaluated three potential avenues for developing this
                    website. While WebFlow and Framer offered impressive
                    development speed, I ultimately settled on
                    <span className="highlight"> React</span>. This choice
                    stemmed from my desire to establish a more robust and
                    descriptive &quot;Projects&quot; section and enhance the
                    overall project viewing experience for users.
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
                      <a href={GPort1}>
                        <img alt="Final Portfolio's Home Page" src={GPort1} />
                      </a>
                      <a href={GPort2}>
                        <img
                          alt="Final Portfolio's ProjectDetails Page"
                          src={GPort2}
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
                href="https://sankhyan.tech"
              >
                <button className="btn">
                  External Link
                  <FaExternalLinkAlt />
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Gulshan1357/portfolio"
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

export default CurrentPortfolioWebsite;
