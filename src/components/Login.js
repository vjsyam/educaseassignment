import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <form>
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <button
          className="btn-primary disabled"
          type="button"
          onClick={() => navigate("/account")}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
