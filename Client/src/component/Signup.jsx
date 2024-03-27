import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Implement your signup logic here (e.g., sending form data to the server)
    console.log('Signing up...');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset form fields after signup
    setUsername('');
    setEmail('');
    setPassword('');
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleSignup}>Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

Signup.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Signup;
