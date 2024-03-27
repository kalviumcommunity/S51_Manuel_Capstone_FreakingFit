import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({isLoggedIn,setIsLoggedIn}) => {
  const handleLogout = ()=>{
    setIsLoggedIn(false);
  }
  return (
    <nav>
      <div className="navbar-container">
        <div className="login-button">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
