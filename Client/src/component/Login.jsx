import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link from react-router-dom
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize isLoggedIn state
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here (e.g., authentication with backend)
    if (username === 'your_username' && password === 'your_password') {
      // Redirect to home page or any other page upon successful login
      setIsLoggedIn(true); // Set isLoggedIn state to true
      navigate('/');
    } else {
      // Handle incorrect credentials
      alert('Invalid username or password');
    }
  };

  return (
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
      <p>Don't have an account? <Link to="/signup">Create account</Link></p> {/* Link to signup page */}
    </div>
  );
}

export default Login;
