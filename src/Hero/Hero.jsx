import "./Hero.scss";
import heroImage from "./heroImage.png";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <main className="main container">
      <div className="introduction">
        <h1 className="faded-heading faded-heading--dark">I AM</h1>
        <div className="introduction-text">
          <h2>Gulshan Sankhyan</h2>
          <h3>
            <span>
              <TypeAnimation
                sequence={[
                  "Front-End",
                  600,
                  "Full-Stack",
                  600,
                  "UI",
                  700,
                  "AR",
                  700,
                  "VR",
                  700,
                  "XR",
                  700,
                ]}
                speed={10}
                repeat={Infinity}
              />
            </span>
            <span>Developer</span>
          </h3>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={heroImage}
          alt="Gulshan's head shot modified using Stable Diffusion AI"
        />
      </div>
    </main>
  );
};

export default Hero;
