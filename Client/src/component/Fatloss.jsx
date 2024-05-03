import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Fatloss.css"

function Fatloss() {
  return (
    <div className="fat-loss-page">
      <h1 className="fat-loss-title">Fat Loss</h1>
      <p className="fat-loss-description">Achieving your weight loss goals requires a combination of healthy eating, regular exercise, and lifestyle changes. Whether you're looking to shed a few pounds or embark on a transformation journey, our comprehensive resources, expert tips, and tailored diet plans will support you every step of the way.</p>
      <p className="fat-loss-video-description">Check out these short videos for some quick tips and demonstrations on fat loss:</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xyNxjx60Y7o"
          title="Fat Loss Video 1"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/W4eKVKwf3rQ"
          title="Fat Loss Video 2"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IA9m2WUkm8Y"
          title="Fat Loss Video 3"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <Link to="/Fat" className='diet'>
        <button>Diet</button>
      </Link>
    </div>
  );
}

export default Fatloss;
