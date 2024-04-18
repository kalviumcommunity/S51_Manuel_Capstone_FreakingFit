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
          <Link to="/">
            <img src={logo} alt="Logo" id='logo'/>
          </Link>
          <h3>Freaking<br/> Fitness</h3>
        </div>
        <div className="buttons">
          <Link to="/login" className="button">Login</Link>
          <Link to="/about" className="button">ABOUT</Link>
          <Link to="/gymgoals" className="button">GYM GOALS</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
