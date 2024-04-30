import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import "./muscle.css";

const Muscle = () => {
  return (
    <div className="muscle-training-page">
      <h2 className="muscle-training-title">Muscle Training</h2>
      <p className="muscle-training-description">
        Muscle training is essential for building strength, improving
        endurance, and maintaining overall fitness. Whether you're a beginner
        or a seasoned gym-goer, incorporating muscle training into your
        routine can help you achieve your fitness goals.
      </p>
      <p className="muscle-training-video-description">
        Check out these short videos for some quick tips and demonstrations on
        muscle training:
      </p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lA-diBuGy6I"
          title="Muscle Training 1"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pZTq9zhr0tk"
          title="Muscle Training 2"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5UuigGzDUZs"
          title="Muscle Training 3"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="center-button">
        {/* Linking "Diet" button to "/Musclestrength" page */}
        <Link to="/Musclestrength">
          <button>Diet</button>
        </Link>
      </div>
    </div>
  );
};

export default Muscle;
