import React from 'react';
import { Link } from 'react-router-dom';
import './Abs.css';

function Abs() {
  return (
    <div className="Abs-page">
      <h1 className="Abs-title">Abs</h1>
      <p className="Abs-description">Building stronger abs is more than just doing crunches. It's about finding the right balance between workouts, nutrition, and lifestyle choices. Whether you're after a toned stomach or better core strength for sports, our resources and personalized plans make it simple.</p>
      <p className="Abs-description">Check out these short videos for some quick tips and demonstrations on Abs training:</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qfWx1EPdhwE"
          title="Abs Video 1"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8PwoytUU06g"
          title="Abs Video 2"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/16fNJQXzYF0"
          title="Abs Video 3"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <Link to="/Absdiet" className='diet'>
        <button>Diet</button>
      </Link>
    </div>
  );
}

export default Abs;
