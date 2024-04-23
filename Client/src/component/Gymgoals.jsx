import React from 'react';
import './gymgoals.css';
import strength from "../assets/strength.png";
import sports from "../assets/sports.png";
import muslebuilding from "../assets/muslebuilding.png";
import fatloss from "../assets/fat loss.jpg"
import Endurancetraining from "../assets/Endurance training.jpg"
// Import other images as needed

const GymGoals = () => {
  return (
    <div className="container">
      <div className="box">
        <img src={strength} alt="strength" />
        <p>Strength Training</p>
      </div>
      <div className="box">
        <img src={ muslebuilding} alt=" muslebuilding" />
        <p>Muscle Building</p>
      </div>
      <div className="box">
      <img src={ fatloss} alt="fatloss" />
        <p>Fat Loss</p> 
      </div>
      <div className="box">
      <img src={Endurancetraining} alt="Endurance training" />
        <p>Endurance Training</p>
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
