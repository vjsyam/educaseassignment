import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="bubble-container">
        <div className="bubble">1</div>
        <div className="bubble">2</div>
        <div className="bubble">3</div>
        <div className="bubble">4</div>
      </div>
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button className="btn-primary" onClick={() => navigate("/signup")}>
        Create Account
      </button>
      <button className="btn-secondary" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;
