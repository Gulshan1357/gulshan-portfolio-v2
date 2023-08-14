import "./About.scss";

const About = () => {
  return (
    <section className="aboutMe" id="about">
      <div className="container">
        <h1 className="faded-heading">About Me</h1>
        <div className="content-offset">
          <p className="aboutMe-main-text">
            Software developer with a focus on eXtended Reality applications for
            platforms such as Virtual Reality and Mixed Reality headsets and
            mobile apps using Unity. Proficiency in Front‑End Web Development,
            with a Master’s degree in the field of Human‑Computer Interaction.
          </p>

          <article className="skills">
            <div className="skill">
              <div className="skill-row">
                <h5>UI Designer</h5>
                <p>
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>
              </div>
              <div className="skill-row">
                <h6>Things I enjoy designing:</h6>
                <p>Websites, UI (Mobile and XR Apps)</p>
              </div>
              <div className="skill-row">
                <h6>Design Tools</h6>
                <p>Figma</p>
                <p>Font Awesome</p>
                <p>Pen & Paper</p>
                <p>Webflow</p>
              </div>
            </div>
            <div className="skill">
              <div className="skill-row">
                <h5>Front-End Developer</h5>
                <p>
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </p>
              </div>
              <div className="skill-row">
                <h6>Languages I speak:</h6>
                <p>JavaScript, TypeScript, Ruby, HTML, CSS</p>
              </div>
              <div className="skill-row">
                <h6>Dev Tools</h6>
                <p>VS Code</p>
                <p>React</p>
                <p>Angular</p>
                <p>Ruby on Rails</p>
                <p>Flexbox & CSS Grid</p>
                <p>Node</p>
                <p>Git and GitHub</p>
              </div>
            </div>
            <div className="skill">
              <div className="skill-row">
                <h5>XR Developer</h5>
                <p>
                  I like to code 3D environments too. Creating immersive
                  experience is something I am very passionate about.
                </p>
              </div>
              <div className="skill-row">
                <h6>Languages I speak:</h6>
                <p>C#, Shader Programming (HLSL)</p>
              </div>
              <div className="skill-row">
                <h6>Dev Tools</h6>
                <p>Unity</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
