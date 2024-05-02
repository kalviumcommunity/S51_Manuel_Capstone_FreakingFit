import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Fatloss.css"
function Fatloss() {
  return (
    <div>
      <h1>Fat Loss</h1>
      <p>Achieving your weight loss goals requires a combination of healthy eating, regular exercise, and lifestyle changes. Whether you're looking to shed a few pounds or embark on a transformation journey, our comprehensive resources, expert tips, and tailored diet plans will support you every step of the way.</p>
      <p>Check out these short videos for some quick tips and demonstrations on fat loss:</p>
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
      <Link to="/Fat">
        <button>Diet</button>
      </Link>
    </div>
  );
}

export default Fatloss;
