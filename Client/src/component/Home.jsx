import React from 'react';
import Footer from './Footer';
import './Home.css'; // Import your CSS file

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="description">
          <h1>Freaking Fitness</h1>
          <p>
            Welcome to Freaking Fit-your personalized fitness companion designed to support you in reaching your health and wellness aspirations. Whether you're striving to bulk up, shed some pounds, or simply enhance your overall fitness, we've got you covered.
            
            Explore our diverse range of workout routines, nutrition plans, and expert guidance tailored to your unique goals. With Freaking Fit by your side, you'll empower yourself to sculpt your dream physique and elevate your well-being.
            Unlock access to custom-tailored training programs and join a vibrant community of like-minded fitness enthusiasts. Together, we'll embark on a journey towards a stronger, healthier version of you.
            Ready to transform your lifestyle and embrace a fitter, happier you? Let Freaking Fit be your trusted partner in this exhilarating adventure towards achieving your fitness dreams.
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
