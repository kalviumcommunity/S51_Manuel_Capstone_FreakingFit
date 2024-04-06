import React from 'react';
import Footer from './Footer';
import './Home.css'; // Import your CSS file

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="description">
          <p>
            Freaking Fit is a comprehensive web application tailored to guide users in achieving their fitness goals, whether it's gaining muscle mass, losing weight, or improving overall fitness levels. With a wide range of workout routines, nutrition plans, and expert advice, Freaking Fit empowers users to sculpt their bodies and enhance their health.<br/><br/>
            Access personalized training programs, and connect with a supportive community of fitness enthusiasts. Freaking Fit is your ultimate partner in the pursuit of a stronger, healthier you.
          </p>
        </div>
        <div className="other-content">
          {/* Your other content goes here */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
