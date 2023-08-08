// import { useState } from "react";
import "./App.scss";
import Contact from "./Contact/Contact";
import Introduction from "./Introduction/Introduction";
import Navigation from "./Navigation/Navigation";
import ProjectsCarousel from "./ProjectsCarousel/ProjectsCarousel";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <ProjectsCarousel />
      <Contact />
    </div>
  );
};

export default App;
