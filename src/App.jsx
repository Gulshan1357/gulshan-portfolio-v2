// import { useState } from "react";
import About from "./About/About";
import "./App.scss";
import Contact from "./Contact/Contact";
import Navigation from "./Navigation/Navigation";
import ProjectsCarousel from "./ProjectsCarousel/ProjectsCarousel";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <About />
      <ProjectsCarousel />
      <Contact />
    </div>
  );
};

export default App;
