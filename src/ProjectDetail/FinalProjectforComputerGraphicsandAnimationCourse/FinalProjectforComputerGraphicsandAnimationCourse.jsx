/* eslint-disable jsx-a11y/anchor-is-valid */
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

import videoBG6CG3 from "./Assets/BackBG.mp4";
import Demo1 from "./Assets/Demo1.gif";
import Demo2 from "./Assets/Demo2.gif";
import Demo4 from "./Assets/Demo4.gif";
import Demo6 from "./Assets/Demo6.gif";
import VideoThumb from "./Assets/VideoThumb.gif";

const FinalProjectforComputerGraphicsandAnimationCourse = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <video src={videoBG6CG3} autoPlay loop muted />
        <div className="container">
          <div className="main-content">
            <h1>Final Project for 6CG3</h1>
            <h2>A Unity Based Project on Computer Graphics and Animation</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Implement what I&apos;ve learned</p>
              </div>
              <div className="main-footer-content">
                <h4>Period</h4>
                <p>July 2023</p>
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
              The journey through the Computer Graphics and Animation course
              (course code: 6CG3) has introduced me to a captivating array of
              techniques, including:
              <ul>
                <li>stencil buffers</li>
                <li>diffuse, emission & normals mapping</li>
                <li>world reflection</li>
                <li>rim lighting</li>
                <li>
                  diverse lighting models (ranging from Lambert and Blinn Phong
                  to PBR and Specular PBR)
                </li>
                <li>logical cutoffs</li>
                <li>vertex and fragment shaders</li>
                <li>animation principles</li>
                <li>transparent and blending effects</li>
              </ul>
            </p>
            <br />
            <p>
              This project is a
              <span className="highlight">
                {" "}
                culmination of that knowledge,{" "}
              </span>
              a playful game where I&apos;ve integrated these effects,
              translating them into an engaging and enjoyable experience.
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
                    While Unity and Shader Programming formed the core focus of
                    this course, I extended my scope to include C# programming
                    as well. This enabled me to implement the necessary logic
                    for the game&apos;s functionality.
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
                      <a href={Demo1}>
                        <img alt="Final Portfolio's Home Page" src={Demo1} />
                      </a>
                      <a href={Demo2}>
                        <img
                          alt="Final Portfolio's ProjectDetails Page"
                          src={Demo2}
                        />
                      </a>
                      <a href={Demo4}>
                        <img
                          alt="Final Portfolio's ProjectDetails Page"
                          src={Demo4}
                        />
                      </a>
                      <a href={Demo6}>
                        <img
                          alt="Final Portfolio's ProjectDetails Page"
                          src={Demo6}
                        />
                      </a>
                      <a
                        data-src="https://vimeo.com/857297919"
                        data-sub-html="<h4>Final Project's Video Explaination</h4><p>6CG3: Computer Graphics and Animation</p>"
                      >
                        <img src={VideoThumb} alt="Click here to play video" />
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

export default FinalProjectforComputerGraphicsandAnimationCourse;
