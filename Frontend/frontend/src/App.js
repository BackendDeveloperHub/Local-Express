import { useState } from "react";
import "./App.css";
import Signup from "./Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  if (!isLogin) {
    return <Signup onSwitchToLogin={() => setIsLogin(true)} />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">LOGIN</button>
        </form>

        <p className="hint">
          Don’t have an account? <span onClick={() => setIsLogin(false)} style={{ cursor: "pointer", color: "#007bff" }}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default App;
