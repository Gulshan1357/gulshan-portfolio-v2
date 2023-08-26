import LightGallery from "lightgallery/react";

import "lightgallery/scss/lg-autoplay.scss";
import "lightgallery/scss/lg-fullscreen.scss";
import "lightgallery/scss/lg-video.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";

import HeroSS from "./Assets/HeroBG.gif";
import InDepthM from "./Assets/In-depth.png";
import SimpleM from "./Assets/Simple.png";
import WelcomeAnim from "./Assets/WelcomeAnimation.gif";

const WealthManagement = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <img src={HeroSS} alt="Background GIF" />
        <div className="container">
          <div className="main-content">
            <h1>Wealth Management</h1>
            <h2>A Unity Based AR mobile Application</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>Unity Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Encourage interest in Investing</p>
              </div>
              <div className="main-footer-content">
                <h4>Period</h4>
                <p>Late 2022 to Early 2023</p>
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
              According to Warren Buffett{" "}
              <span className="highlight">
                {" "}
                people should invest in what they know
              </span>
              . This application embodies that principle. By leveraging this
              app, users gain the ability to scan the objects in their
              surroundings using their phone camera. This provides supplementary
              investment details, such as{" "}
              <span className="highlight">
                {" "}
                identifying the specific RBC fund associated with that object
              </span>
              . Furthermore, users can gain insights into how these funds stack
              up against well-known index funds.
            </p>
          </div>
        </div>
      </section>

      <section className="development">
        <article className="container-half dev-phase">
          <div className="container">
            <h1 className="faded-heading">Design & &lt;Dev&gt;</h1>
            <div className="content-offset">
              <div className="half-cols">
                <div className="left-half">
                  <p>
                    In this project, I made three significant contributions:
                    <ul>
                      <li>
                        <span className="highlight">
                          {" "}
                          Welcome Screen Animation:{" "}
                        </span>
                        Building upon RBC&apos;s initial logo animation, I
                        introduced my own animation that smoothly glided atop
                        the existing logo. This animation was synchronized with
                        the emergence of new text, creating a captivating visual
                        transition.
                      </li>
                      <br />
                      <li>
                        <span className="highlight">
                          {" "}
                          UI Design and Development:{" "}
                        </span>
                        I designed and developed both the Simple and In-depth
                        views for scanned objects in form of floating card in
                        Unity.
                      </li>
                      <br />
                      <li>
                        <span className="highlight">
                          {" "}
                          Data Graph Integration:{" "}
                        </span>
                        Additionally, I integrated a data graph feature that
                        facilitated a comparative analysis of RBC&apos;s
                        funds&apos; values against popular index funds.
                      </li>
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
                      <a href={WelcomeAnim}>
                        <img alt="Welcome Animation" src={WelcomeAnim} />
                      </a>
                      <a href={SimpleM}>
                        <img alt="Simple Mode" src={SimpleM} />
                      </a>
                      <a href={InDepthM}>
                        <img
                          alt="In-Depth Mode (Graph data removed)"
                          src={InDepthM}
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
    </div>
  );
};

export default WealthManagement;
