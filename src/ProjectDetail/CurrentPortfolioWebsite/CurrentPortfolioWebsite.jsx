const CurrentPortfolioWebsite = () => {
  return (
    <div>
      <main className="project-main">
        <h1>CurrentPortfolioWebsite</h1>
        <h2>A Virtual Reality Game</h2>
        <img href="/" alt=""></img>
        <div>
          <h4>Role</h4>
          <p>Full-Stack Developer</p>
        </div>
        <div>
          <h4>Contex</h4>
          <p>Show my skills and work</p>
        </div>
        <div>
          <h4>Period</h4>
          <p>Late 2023</p>
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

export default CurrentPortfolioWebsite;
