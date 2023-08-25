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

import SS1 from "./Assets/1.png";
import SS2 from "./Assets/2.png";
import SS3 from "./Assets/3.png";
import SS4 from "./Assets/4.png";
import SS5 from "./Assets/5.png";
import SS6 from "./Assets/6.png";
import SS7 from "./Assets/7.png";
import SS8 from "./Assets/8.png";
import { default as MainBG, default as SS9 } from "./Assets/9.png";

const StudyBuddyApp = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        {/* <video src={videoBgLVR} autoPlay loop muted /> */}
        <img src={MainBG} alt="Background GIF" />
        <div className="container">
          <div className="main-content">
            <h1>Study Buddy App</h1>
            <h2>A Ruby on Rails Web Application</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>Full-Stack Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Final Project for Web Application Course</p>
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
              A Ruby on Rails application that facilitates student-to-student
              study partnerships. This project served as the culminating
              assignment for the Prototyping Web Applications course and
              garnered an exceptional A+ grade. The task entailed proposing a
              project idea and executing it within a compressed two-week
              timeframe.{" "}
              <span className="highlight">Learning goal include:</span>
              <ul>
                <li>How to build a full-stack web applicaaiton.</li>
                <li>How to handle database.</li>
                <li>How to manage different routes</li>
                <li>Active Storage in Rails</li>
                <li>Nested Resources in Rails</li>
                <li>
                  Create Authentication and Authorisation functionality from
                  scratch
                </li>
                <li>How to add API functionality to a web application</li>
              </ul>
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
                  <p>User Actions</p>
                  <ul>
                    <li className="large-li">Log in and Log-out</li>
                    <li className="large-li">
                      Update personal information including password
                    </li>
                    <li className="large-li">
                      Upload profile photo using activ estorage
                    </li>
                    <li className="large-li">Book a meeting</li>
                    <li className="large-li">
                      Chat with their partner. Messages are not updated in real
                      time.
                    </li>
                    <li className="large-li">
                      Access data through API Endpoints (need API key to
                      authenticate)
                    </li>
                  </ul>
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
                        <img alt="Home Page" src={SS1} />
                      </a>
                      <a href={SS2}>
                        <img alt="Sign-up Page" src={SS2} />
                      </a>
                      <a href={SS3}>
                        <img alt="Sign-in Page" src={SS3} />
                      </a>
                      <a href={SS4}>
                        <img alt="Profile Page" src={SS4} />
                      </a>
                      <a href={SS5}>
                        <img alt="Edit Profile Page" src={SS5} />
                      </a>
                      <a href={SS6}>
                        <img alt="Schedule Studdy Session Page 1" src={SS6} />
                      </a>
                      <a href={SS7}>
                        <img alt="Schedule Studdy Session Page 2" src={SS7} />
                      </a>
                      <a href={SS8}>
                        <img alt="Schedule Studdy Session Page 3" src={SS8} />
                      </a>
                      <a href={SS9}>
                        <img
                          alt="Meeting Details and Chat Room Page"
                          src={SS9}
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
                href="https://github.com/Gulshan1357/study-buddy-app-api"
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

export default StudyBuddyApp;
