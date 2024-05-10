import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Sport.css"; // Make sure to adjust the path based on your file structure

const Sport = () => {
  return (
    <div className="Sport-training-page">
      <h2 className="Sport-training-title">Sport-specific Training</h2>
      <p className="Sport-training-description">
        Sport-specific training is tailored to the unique demands of a particular sport, refining skills and enhancing performance. By targeting specific muscle groups and movements relevant to the sport, athletes improve agility, power, and technique. This focused approach not only builds strength and endurance but also reduces the risk of injury. Sport-specific training is essential for athletes looking to excel in their chosen discipline, maximizing their athletic potential and competitive edge.
      </p>
      <p className="Sport-training-video-description">
        Check out these short videos for some quick tips and demonstrations on
        Sport-specific training :
      </p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/66oUAhI0nQQ"
          title="Sport-Specific Training 1"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TFSYNWPYujQ"
          title="Sport-Specific Training 2"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GYWZczlItM8"
          title="Sport-Specific Training 3"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="center-button">
        <Link to="/Sportdiet">
          <button>Diet</button>
        </Link>
      </div>
    </div>
  );
};

export default Sport;
