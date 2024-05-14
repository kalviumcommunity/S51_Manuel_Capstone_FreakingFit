import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login',{
                name:username,
                password:password
            }).then((response)=>{
            setCookie('token', response.data.accessToken,365);
            setCookie('username', username,365);
        navigate('/')}).catch((error)=>{console.error(error)});
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" id='login'>Login</button>
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
