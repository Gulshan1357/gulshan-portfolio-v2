import { lazy, Suspense } from "react";

import "./App.scss";

import About from "./About/About";
import Hero from "./Hero/Hero";
import ContentLoadingAnimation from "./LoadingAnimation/LoadingContent";
import Navigation from "./Navigation/Navigation";

const ProjectsCarousel = lazy(() =>
  import("./ProjectsCarousel/ProjectsCarousel"),
);

const Contact = lazy(() => import("./Contact/Contact"));

const App = () => {
  return (
    <div className="App">
      <Navigation />

      <Hero />
      <About />
      <Suspense fallback={<ContentLoadingAnimation type="ProjectCarousel" />}>
        <ProjectsCarousel />
      </Suspense>
      <Suspense fallback={<ContentLoadingAnimation type="Contact" />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default App;
