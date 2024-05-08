import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './gymgoals.css';
import strength from "../assets/strength.png";
import muslebuilding from "../assets/muslebuilding.png";
import fatloss from "../assets/fat loss.png";

const GymGoals = () => {
  return (
    <div className="container">
      <div className="box">
        <Link to="/Strength"> {/* Wrap the image inside Link and specify the target route */}
          <img src={strength} alt="strength" />
          <p>Strength Training</p>
        </Link>
      </div>
      <div className="box">
      <Link to ="/Muscle">
        <img src={ muslebuilding} alt=" muslebuilding" />
        <p>Muscle Building</p>
        </Link>
      </div>
      <Link to="/Fatloss">
      <div className="box">
      <img src={ fatloss} alt="fatloss" />
        <p>Fat Loss</p> 
      
      </div>
      </Link>
      <div className="box">
      <Link to='/Endurance'>
        <p>Endurance Training</p>
        </Link>
      </div>
      <div className="box">
        {/* Add image and alt text for Flexibility and Mobility */}
        <p>Flexibility and Mobility</p>
      </div>
      <div className="box">
        {/* Add image and alt text for Functional Training */}
        <p>Functional Training</p>
      </div>
      <div className="box">
        {/* Add image and alt text for Sport-Specific Training */}
        <p>Sport-Specific Training</p>
      </div>
      <div className="box">
        {/* Add image and alt text for Custom Goal */}
        <p>Custom Goal</p>
      </div>
    </div>
  );
};

export default GymGoals;
