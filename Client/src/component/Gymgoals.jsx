import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './gymgoals.css';
import strength from "../assets/strength.png";
import muslebuilding from "../assets/muslebuilding.png";
import fatloss from "../assets/fat loss.png";
import Endurance from "../assets/Endurance training.jpg";

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
      <img src={Endurance} alt="Endurance Training" />
        <p>Endurance Training</p>
        </Link>
      </div>
      <div className="box">
      <Link to ="/Flexibility">
        <p>Flexibility and Mobility</p>
        </Link>
      </div>
      <div className="box">
      <Link to="/Functional">
        <p>Functional Training</p>
      </Link>
      </div>
      <div className="box">
      <Link to="/Sport">
        <p>Sport-Specific Training</p>
      </Link>
      </div>
      <div className="box">
        {/* Add image and alt text for Custom Goal */}
        <p>Custom Goal</p>
      </div>
    </div>
  );
};

export default GymGoals;
