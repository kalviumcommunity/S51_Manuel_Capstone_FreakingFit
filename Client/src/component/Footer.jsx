import React from 'react';
import './Footer.css'; // Import your Footer styles if you have any

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className='footer-heading'>Exercise Plans</h3>
          <p>Find personalized exercise routines to help you reach your fitness goals.</p>
          <ul>
            <li>Cardio workouts</li>
            <li>Strength training</li>
            <li>Flexibility exercises</li>
            <li>And more...</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className='footer-heading'>Diet Plans</h3>
          <p>Discover healthy meal plans tailored to your dietary needs and preferences.</p>
          <ul>
            <li>Balanced nutrition</li>
            <li>Weight loss diets</li>
            <li>Muscle building diets</li>
            <li>And more...</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className='footer-heading'>Connect With Us</h3>
          <p>Follow us on social media for daily fitness tips, motivation, and updates.</p>
          <ul>
          <li> Instragram : freakingfit</li>
          <li>Twitter : Freakingfit_chennai</li>
          <li> Facebook : freakingfit</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Fitness App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
