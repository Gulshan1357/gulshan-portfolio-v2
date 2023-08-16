import videoBgLVR from "./Assets/VideoLVR.mp4";
import "./LacrosseVR.scss";

const LacrosseVR = () => {
  return (
    <div>
      <main className="project-main">
        <div className="overlay"></div>
        <video src={videoBgLVR} autoPlay loop muted />
        <div className="main-content">
          <h1>Lacrosse VR</h1>
          <h2>A Virtual Reality Game</h2>
          <img href="/" alt=""></img>
          <div>
            <h4>Role</h4>
            <p>XR Developer</p>
          </div>
          <div>
            <h4>Contex</h4>
            <p>Show VR in Indegenous Games</p>
          </div>
          <div>
            <h4>Period</h4>
            <p>Early 2023</p>
          </div>
        </div>
      </main>

      <section className="project-contex">
        <h1>Why?</h1>
        <p>
          The problem was Lorem ipsum. THe problem was Lorem ipsum and this. THe
          problem was Lorem ipsum and this. THe problem was Lorem ipsum and
          this.
        </p>
      </section>

      <section className="project-development">
        <article className="dev-phase">
          <div>
            <h1>Branding</h1>
            <p>Decided to go with these colors. Because of ease of reasons.</p>
          </div>
          <div>
            <img src="/" alt="" />
          </div>
        </article>

        <article className="dev-phase">
          <div>
            <h1>Design</h1>
            <p>LoFI and HiFI Wireframes. Any prototyping changes. etc.</p>
          </div>
          <div>
            <img src="/" alt="" />
          </div>
        </article>
      </section>

      <section className="project-link">
        <h1>Link</h1>
        <button>GitHub</button>
      </section>
    </div>
  );
};

export default LacrosseVR;
