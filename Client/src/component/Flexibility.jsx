import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Flexibility.css"

function Flexibility() {
  return (
    <div className="Flexibility-page">
      <h1 className="Flexibility-title">Flexibility and Mobility</h1>
      <p className="Flexibility-description">Enhancing flexibility and mobility is crucial for better physical performance and injury prevention. Our tailored resources and expert guidance will help you achieve your flexibility goals with ease and dynamic stretching routines tailored to your needs, ensuring you move better and feel better in your everyday activities.</p>
      <p className="Flexibility-video-description">Check out these short videos for some quick tips and demonstrations on Flexibility and Mobility:</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Kq1RZFV5tM4"
          title="Flexibility Video 1"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/i6TzP2COtow"
          title="Flexibility Video 2"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bqHZT259dlw"
          title="Flexibility Video 3"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <Link to="/Flexdiet" className='diet'>
        <button>Diet</button>
      </Link>
    </div>
  );
}

export default Flexibility;
