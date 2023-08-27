import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import "./Hero.scss";
import heroImage from "./heroImage.png";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <main className="main">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fps_limit: 60,
          interactivity: {
            detect_on: "canvas",
            events: {
              onclick: { enable: true, mode: "push" },
              onhover: {
                enable: true,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 },
              },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              attract: { distance: 200, duration: 0.4, factor: 5 },
            },
          },
          particles: {
            color: { value: "#7e3b96" },
            line_linked: {
              color: "#7e3b96",
              distance: 150,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: { density: { enable: true, value_area: 600 }, value: 80 },
            opacity: {
              anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
              random: false,
              value: 0.8,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100,
              },
              polygon: { nb_sides: 5 },
              stroke: { color: "#000000", width: 0 },
              type: "circle",
            },
            size: {
              anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
              random: true,
              value: 5,
            },
          },
          polygon: {
            draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: "none",
            url: "",
          },
          retina_detect: true,
          smooth: true,
          pauseOnOutsideViewport: true,
          fullScreen: { enable: false },
        }}
      />
      <div className="grid-container container ">
        <div className="introduction">
          <h1 className="faded-heading faded-heading--dark">I AM</h1>
          <div className="introduction-text">
            <h2>Gulshan Sankhyan</h2>
            <h3>
              <span>
                <TypeAnimation
                  sequence={[
                    "Front-End",
                    1000,
                    "Full-Stack",
                    1000,
                    "UI",
                    1200,
                    "AR",
                    1200,
                    "VR",
                    1200,
                    "XR",
                    1200,
                  ]}
                  speed={70}
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
            loading="lazy"
            alt="Gulshan's head shot modified using Stable Diffusion AI"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
