import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./strength.css"; // Make sure to adjust the path based on your file structure

const Strength = () => {
  return (
    <div className="strength-training-page">
      <h2 className="strength-training-title">Strength Training</h2>
      <p className="strength-training-description">
        Strength training is a vital component of any fitness regimen. It helps
        build muscle, increase bone density, and improve overall strength and
        endurance.
      </p>
      <p className="strength-training-video-description">
        Check out these short videos for some quick tips and demonstrations on
        strength training:
      </p>
      <div className="video-container">
        <iframe 
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fWN3Grwu_hc"
          title="Strength Training"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9FBIaqr7TjQ"
          title="Strength Training"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/H1F-UfC8Mb8"
          title="Strength Training"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="center-button">
        <Link to="/Strengthdiet">
          <button>Diet</button>
        </Link>
      </div>
    </div>
  );
};

export default Strength;
