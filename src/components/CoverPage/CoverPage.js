import React from "react";
import "./CoverPage.css";

const CoverPage = () => {
    return (
        <div className="header-image-container">
    <img
      src="assets/images/main.png"
      alt="DBTR logo"
      className="header-image"
    />
    <div className="overlay-text">
      <h1>Our events gallery</h1>
      <p>Events at DBTR are filled with joyous occasions, cultural gatherings, and learning opportunities that bring us all together.</p>
    </div>
  </div>

    )
    
};

export default CoverPage;