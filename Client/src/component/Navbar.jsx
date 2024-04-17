import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/logo_new-removebg-preview.png";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/"> {/* Link wraps the logo and sets the destination to the home page */}
            <img src={logo} alt="Logo" id='logo'/>
          </Link>
          <h3>Freaking<br/> Fitness</h3>
        </div>
        <div className="login-button">
          <Link to="/login">Login</Link>
        <div className="buton">
          <button>ABOUT</button>
        <Link to ="/About"></Link>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
