import React, { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [mobile, setMobile] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }
    alert("Login successful!");
    setMobile("");
  };

  return (
    <div className="login-container">
      
        <img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="meesho" />
      
      <div className="login-box">
        <h2 className="title">Login</h2>

        <form onSubmit={handleLogin}>
          <label>Mobile Number</label>
          <input
            type="text"
            className="input"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ""))}
            maxLength={10}
            required
          />

          <button type="submit" className="btn" disabled={mobile.length !== 10}>
            Login
          </button>
        </form>
      </div>
      <Link to='/'  ><button className="but">Back</button></Link>
    </div>
  );
}
