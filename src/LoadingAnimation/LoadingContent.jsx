import React from "react";
import ContentLoader from "react-content-loader";

import "./LoadingContent.scss";

const LoadingContent = (props) => {
  if (props.type === "ProjectCarousel") {
    return (
      <div className="loading-pane">
        <div className="loading-pane--fullScreen">
          <ContentLoader
            speed={0.8}
            width={400}
            height={270}
            viewBox="0 0 400 270"
            backgroundColor="#090f0f"
            foregroundColor="#0f1616"
          >
            <rect x="0" y="0" rx="2" ry="2" width="345" height="33" />
            <rect x="0" y="46" rx="2" ry="2" width="171" height="16" />
            <rect x="0" y="75" rx="2" ry="2" width="181" height="161" />
            <rect x="53" y="245" rx="2" ry="2" width="67" height="22" />
            <rect x="129" y="245" rx="2" ry="2" width="25" height="22" />
            <rect x="265" y="245" rx="2" ry="2" width="44" height="22" />
            <rect x="319" y="245" rx="2" ry="2" width="68" height="22" />
            <rect x="195" y="76" rx="0" ry="0" width="202" height="161" />
            <rect x="195" y="245" rx="2" ry="2" width="59" height="22" />
            <rect x="0" y="245" rx="2" ry="2" width="44" height="22" />
          </ContentLoader>
        </div>
      </div>
    );
  } else if (props.type === "Contact") {
    return (
      <div className="loading-pane">
        <div className="loading-pane--fullScreen">
          <ContentLoader
            speed={0.8}
            width={400}
            height={100}
            viewBox="0 0 400 100"
            backgroundColor="#090f0f"
            foregroundColor="#0f1616"
          >
            <rect x="0" y="0" rx="2" ry="2" width="100" height="100" />
            <rect x="150" y="0" rx="2" ry="2" width="100" height="100" />
            <rect x="300" y="2" rx="2" ry="2" width="100" height="100" />
          </ContentLoader>
        </div>
      </div>
    );
  }
};

export default LoadingContent;
