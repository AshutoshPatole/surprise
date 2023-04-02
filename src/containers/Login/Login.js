import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const secretPassword = "Wow_What_A_Way_To_Hack_In";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "hacky_dork" && password === secretPassword) {
      console.log("okay");
    } else {
      alert("Wrong username/password");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Hack your way into!</h2>
      <p className="user-name">Your encoded user name is aGFja3lfZG9yaw==</p>
      <p className="saucy">{secretPassword}</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="show-password-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
