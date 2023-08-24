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

import V1 from "./Assets/V1.png";
import V3 from "./Assets/V3.png";

const ARTranscriptionandTranslation = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        {/* <video src={videoBgLVR} autoPlay loop muted /> */}
        <img src={V3} alt="Background GIF" />
        <div className="container">
          <div className="main-content">
            <h1>AR Transcription and Translation</h1>
            <h2>An Angular Web Application</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>Front-End Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Bridge Language gap</p>
              </div>
              <div className="main-footer-content">
                <h4>Period</h4>
                <p>Late 2022</p>
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
              Our team at RBC had a distinct mission: to explore the potential
              applications of AR and VR technologies within the context of the
              bank. Given Canada&apos;s diverse population and the varied
              proficiency in English, we recognized the need to address language
              barriers. Leveraging advancements in Lightweight AR glasses and
              cloud-based Transcription and Translation services, our focus
              shifted to bridging this gap effectively.
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
                    Centered on enhancing the app&apos;s user interface, my role
                    was to ensure its alignment with the dynamic AR and VR
                    environments, guaranteeing user-friendliness. This involved
                    maintaining coherence with RBC&apos;s design scheme for a
                    cohesive theme.
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
                      <a href={V1}>
                        <img alt="Initial UI" src={V1} />
                      </a>
                      <a href={V3}>
                        <img alt="Final UI" src={V3} />
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
              <a target="_blank" rel="noopener noreferrer" href="/">
                <button className="btn" disabled>
                  Link unavailable as it is an internal RBC product
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ARTranscriptionandTranslation;
