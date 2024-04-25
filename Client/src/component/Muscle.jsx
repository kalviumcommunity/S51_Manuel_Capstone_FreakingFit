import React from 'react';
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
          src="https://www.youtube.com/embed/fWN3Grwu_hc"
          title="Muscle Training"
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
          title="Muscle Training"
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
          title="Muscle Training"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Muscle;
