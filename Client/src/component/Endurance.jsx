import React from 'react';
import { Link } from 'react-router-dom';
import './endurance.css';

function Endurance() {
  return (
    <div className="endurance-training-page">
      <h1 className="endurance-training-title">Endurance Training</h1>
      <p className="endurance-training-description">Attaining your endurance training objectives demands a blend of consistent training, strategic nutrition, and lifestyle adjustments. Whether you're aiming to boost your stamina for long-distance running or elevate your performance in endurance sports, our extensive array of resources and customized training programs are here to assist you throughout your journey, ensuring progress and success every step of the way.</p>
      <p className="endurance-training-description">Check out these short videos for some quick tips and demonstrations on endurance training:</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/saXF2xH3A2U"
          title="Endurance Training Video 1"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LhhWNixj5zE"
          title="Endurance Training Video 2"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sDsuW9RaQK0"
          title="Endurance Training Video 3"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <Link to="/Endu" className='diet'>
        <button>Diet</button>
      </Link>
    </div>
  );
}

export default Endurance;
