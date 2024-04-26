import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'manuel' && password === '123456789') {
      setIsLoggedIn(true);
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Create account</Link></p>
    </div>
    </div>
  );
}

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired, // Ensure setIsLoggedIn prop is a function and is required
};

export default Login;
