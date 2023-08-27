import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import LoadingPageAnimation from "./LoadingAnimation/LoadingPage";

const ProjectDetails = lazy(() => import("./ProjectDetail/ProjectDetails"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingPageAnimation />}>
        <Routes>
          <Route
            path="/projectDetails/:projectName"
            element={<ProjectDetails />}
          />
          <Route path="/" element={<App />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
