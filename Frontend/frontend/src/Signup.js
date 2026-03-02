import React, { useState } from "react";
import "./App.css";

function Signup({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { name, phone, email, password, confirmPassword } = formData;

    // Basic Validation
    if (!name || !phone || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Registration successful! You can now login.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setError(data.detail || "Something went wrong.");
      }
    } catch (err) {
      setError("Unable to connect to the server.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Register</h2>
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        {success && <p style={{ color: "green", fontSize: "14px" }}>{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">SIGN UP</button>
        </form>

        <p className="hint">
          Already have an account? <span onClick={onSwitchToLogin} style={{ cursor: "pointer", color: "#007bff" }}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
