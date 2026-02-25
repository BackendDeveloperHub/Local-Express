import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please fill in all fields to login.", { id: 'login-validation' });
      return;
    }

    const loadToast = toast.loading("Authenticating...", { id: 'auth-loading' });

    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/login', {
        username: username,
        password: password
      });

      if (response.data.is_logged_in) {
        localStorage.setItem('token', response.data.access_token);
        setIsLoggedIn(true);
        toast.success("Welcome back! Login successful.", { id: 'auth-loading' });
        navigate('/');
      }
    } catch (error) {
      console.error("Login Error:", error);
      const errorMsg = error.response?.data?.detail || "Invalid username or password. Please try again.";
      toast.error(errorMsg, { id: 'auth-loading' });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Local Express</h2>
        <p>Login to continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
