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

import SS3 from "./Assets/FF3.jpg";
import SS4 from "./Assets/FF4.jpg";
import SS2 from "./Assets/Home2.jpg";
import SS1 from "./Assets/Login1.jpg";
import SS5 from "./Assets/MF5.jpg";
import MainBG from "./Assets/Peek.jpg";

const Hospitality = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <img src={MainBG} loading="lazy" alt="Background as Home Page" />
        <div className="container">
          <div className="main-content">
            <h1>ONGC Hospitality</h1>
            <h2>ASP.NET Web Application</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>Full-Stack Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Internship Project</p>
              </div>
              <div className="main-footer-content">
                <h4>Period</h4>
                <p>2019</p>
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
              I completed this project during my internship at ONGC,
              India&apos;s largest oil and gas exploration and production
              company. My task was to build an ASP.NET web form application that
              allow employees to request and approve food and beverage
              requirements for office parties and is connected with their
              internal database so that they can login with their credentials.
            </p>
          </div>
        </div>
      </section>

      <section className="container-full">
        <div className="container">
          <h1 className="faded-heading">Tools & Tech</h1>
          <div className="content-offset">
            <p>Developement</p>
            <ul>
              <li className="large-li">ASP.NET</li>
              <li className="large-li">HTML, CSS, Bootstrap</li>
              <li className="large-li">Javascript, jQuery</li>
              <li className="large-li">C#</li>
              <li className="large-li">SQL Server Management Studio</li>
              <li className="large-li">Ajax</li>
            </ul>
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
                    I collaborated with another intern who provided the
                    project&apos;s design, while I assumed full responsibility
                    for its development. This encompassed everything from CSS
                    styling to backend functionality implemented in{" "}
                    <span className="highlight">C#</span> and{" "}
                    <span className="highlight">ASP.NET</span>, along with
                    managing storage through
                    <span className="highlight">
                      {" "}
                      SQL Server Management Studio
                    </span>
                    .
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
                        <img alt="Login Page" loading="lazy" src={SS1} />
                      </a>
                      <a href={SS2}>
                        <img alt="Home Page" loading="lazy" src={SS2} />
                      </a>
                      <a href={SS3}>
                        <img alt="Fill-Form Part 1" loading="lazy" src={SS3} />
                      </a>
                      <a href={SS4}>
                        <img alt="Fill-Form Part 2" loading="lazy" src={SS4} />
                      </a>
                      <a href={SS5}>
                        <img alt="My Forms Page" loading="lazy" src={SS5} />
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
                href="https://github.com/Gulshan1357/ONGC_hospitality"
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

export default Hospitality;
