import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login Successful (Frontend only)");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Local Express</h2>
        <p>Login to continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
}

export default App;
