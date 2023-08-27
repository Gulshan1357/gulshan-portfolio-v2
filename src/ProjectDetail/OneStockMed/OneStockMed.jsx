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

import Desktop from "./Assets/Desk.png";
import HiFi from "./Assets/HomeHi.png";
import LoFi from "./Assets/HomeLo.png";
import LogoB from "./Assets/LogoB.svg";
import LogoW from "./Assets/LogoW.svg";
import Mobile from "./Assets/Mob.png";
import MainBG from "./Assets/Peek.png";

const OneStockMed = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <img src={MainBG} loading="lazy" alt="Background GIF" />
        <div className="container">
          <div className="main-content">
            <h1>OneStockMed</h1>
            <h2>A Landing Page made by Figma & Webflow</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>UI/UX Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Landing page for a startup</p>
              </div>
              <div className="main-footer-content">
                <h4>Period</h4>
                <p>Late 2021</p>
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
              I was presented with an opportunity by a friend to craft a landing
              page for his startup venture. My first step into the realm of
              professional work. The task was to design a landing page for a
              medicine order and delivery app to attract potential funding.
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
                    Why did I opt for these particular colors? I conducted a
                    bried research on suitable colors for a software associated
                    with the medical field. And it mostly pointed towards Blue
                    and White. Also, I chose gradients over solid colors to
                    elevate the visual impact and add depth.
                  </p>
                </div>
                <div className="right-half">
                  <div className="right-half-colors">
                    <div
                      style={{
                        background:
                          "linear-gradient(45deg, #256BCF 0%, #07367A 100%)",
                      }}
                      className="right-half-color"
                    />
                    <div
                      style={{
                        background:
                          "linear-gradient(180deg, #F8FBFF 0%, #E2E9F5 100%)",
                      }}
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
            <h1 className="faded-heading">Logo</h1>
            <div className="content-offset">
              <div className="half-cols">
                <div className="left-half">
                  <p>I also designed logos based on the same color scheme</p>
                </div>
                <div className="right-half">
                  <div className="right-half-colors">
                    <div>
                      <img
                        src={LogoB}
                        className="right-half-logo"
                        loading="lazy"
                        alt="Blue Logo"
                      />
                    </div>
                    <div>
                      <img
                        src={LogoW}
                        className="right-half-logo"
                        loading="lazy"
                        alt="White Logo"
                      />
                    </div>
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
                    low-fidelity and high-fidelity wireframes.
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
                        <img
                          alt="Home Page Low Fidelity"
                          className="img--same--height"
                          loading="lazy"
                          src={LoFi}
                        />
                      </a>
                      <a href={HiFi}>
                        <img
                          alt="Home Page Hi Fidelity"
                          className="img--same--height"
                          loading="lazy"
                          src={HiFi}
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
                    Given the project&quot;s straightforward nature, I leveraged{" "}
                    <span className="highlight"> Webflow </span> for its rapid
                    development capabilities. This platform excels in swiftly
                    creating simple websites, making it an ideal choice for this
                    project.
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
                      <a href={Desktop}>
                        <img
                          alt="Desktop View of the Landing Page"
                          loading="lazy"
                          src={Desktop}
                        />
                      </a>
                      <a href={Mobile}>
                        <img
                          alt="Mobile View of the Page"
                          loading="lazy"
                          src={Mobile}
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
                href="https://onestockmed.webflow.io/"
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

export default OneStockMed;
