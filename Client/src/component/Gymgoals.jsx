import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './gymgoals.css';
import strength from "../assets/strength.png";
import muslebuilding from "../assets/muslebuilding.png";
import fatloss from "../assets/fat loss.png";
import Endurance from "../assets/Endurance training.png";
import flexibility from "../assets/flexibility and mobility.png";
import Functional_Training from "../assets/Funtional_training.png";
import sports_specific from "../assets/sports specific training.png";
import abs from "../assets/abs workout.png";

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
        <img src={flexibility} alt="" />
        <p>Flexibility and Mobility</p>
        </Link>
      </div>
      <div className="box">
      <Link to="/Functional">
        <img src={Functional_Training} alt="" />
        <p>Functional Training</p>
      </Link>
      </div>
      <div className="box">
      <Link to="/Sport">
        <img src={sports_specific} alt="" />
        <p>Sport-Specific Training</p>
      </Link>
      </div>
      <div className="box">
      <Link to="/Abs">
        <img src={abs} alt="" />
        <p>ABS</p>
      </Link>
      </div>
    </div>
  );
};

export default GymGoals;
