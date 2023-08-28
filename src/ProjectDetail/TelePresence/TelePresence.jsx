import "lightgallery/scss/lg-autoplay.scss";
import "lightgallery/scss/lg-fullscreen.scss";
import "lightgallery/scss/lg-video.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

import HeroBG from "./Assets/unavailable-image.jpg";

const TelePresence = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <img src={HeroBG} loading="lazy" alt="Background Unavailable" />
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
                <p>Meetings on TV</p>
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
              In a brief yet impactful project, I undertook the development of a
              React-based video conferencing app optimized for large-screen TVs
              and one-to-many hybrid meetings.
            </p>
            <br />
            <p>
              I conducted a thorough analysis of{" "}
              <span className="highlight">
                {" "}
                3 APIs (Peer2Peer, Daily.co, and Webex){" "}
              </span>
              and tested their performance to identify the best backend option
              for RBC. These analyses yielded Daily.co as the most optimal
              choice for RBC
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TelePresence;
