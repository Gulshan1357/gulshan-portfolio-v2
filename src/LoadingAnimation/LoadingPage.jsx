import ClipLoader from "react-spinners/ClipLoader";

import "./LoadingPage.scss";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loading-page--fullScreen">
        <ClipLoader color="#Ee7f44" size={150} speedMultiplier={1.2} />
      </div>
    </div>
  );
};

export default LoadingPage;
