// import { useState } from "react";
import About from "./About/About";
import "./App.scss";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Navigation from "./Navigation/Navigation";
import ProjectsCarousel from "./ProjectsCarousel/ProjectsCarousel";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Hero />
        <About />
        <ProjectsCarousel />
        <Contact />
      </div>
    </div>
  );
};

export default App;
