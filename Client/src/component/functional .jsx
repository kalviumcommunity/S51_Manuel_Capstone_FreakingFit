import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Functional.css"

function Functional() {
  return (
    <div className="Functional-page">
      <h1 className="Functional-title">Functional Training</h1>
      <p className="Functional-description">Functional training enhances strength, mobility, and performance while minimizing injury risks. Our expert guidance and customized routines ensure you excel in everyday activities with ease.</p>
      <p className="Functional-video-description">Check out these short videos for some quick tips and demonstrations on Functional Training:</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/b1gBNyL13bM"
          title="Functional Video 1"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KajK1_YA5QA"
          title="Functional Video 2"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/U1XXOLGfGBk"
          title="Functional Video 3"
          frameBorder="0"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <Link to="/Functionaldiet" className='diet'>
        <button>Diet</button>
      </Link>
    </div>
  );
}

export default Functional;
