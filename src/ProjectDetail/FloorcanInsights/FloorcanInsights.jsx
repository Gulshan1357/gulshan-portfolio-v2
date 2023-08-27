import "lightgallery/scss/lg-autoplay.scss";
import "lightgallery/scss/lg-fullscreen.scss";
import "lightgallery/scss/lg-video.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

import HeroImage from "./Assets/unavailable-image.jpg";

const FloorcanInsights = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <img src={HeroImage} loading="lazy" alt="Background GIF" />
        <div className="container">
          <div className="main-content">
            <h1>Floorcan Insights</h1>
            <h2>A React Based DECK.GL Data Visualization App</h2>
            <div className="main-footer">
              <div className="main-footer-content">
                <h4>Role</h4>
                <p>Front-End Developer</p>
              </div>
              <div className="main-footer-content">
                <h4>Contex</h4>
                <p>Visualize geographical data</p>
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
              We were tasked with revitalizing the data visualization tools
              utilized by a specific department at RBC. Their existing tools
              were outdated for analyzing client geographical data. To modernize
              this process, we embraced the{" "}
              <span className="highlight"> DECK.GL </span>framework in
              combination with React, enabling a comprehensive redesign. My
              primary responsibility involved conceiving and executing the User
              Interface (UI) transformation.
            </p>
            <br />
            <p>
              Beginning with the design phase, I leveraged Figma to craft the
              UI, meticulously sculpting a visual identity with RBC&apos;s
              design guide. After the design was finalized, I transitioned to
              the development phase. Implementing the UI in React, I employed
              CSS to bring the design to life, ensuring a seamless and intuitive
              user experience.
            </p>
            <br />
            <p>
              As the project involved sensitive client data, regrettably,
              I&apos;m
              <span className="highlight">
                {" "}
                unable to share any visuals or images{" "}
              </span>
              .
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
                      <li>CSS</li>
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

      <section className="container-full">
        <div className="container">
          <h1 className="faded-heading">Links</h1>
          <div className="content-offset">
            <div className="btns">
              <a target="_blank" rel="noopener noreferrer" href="/">
                <button className="btn" disabled>
                  Live Link unavailable due to privacy concerns
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloorcanInsights;
