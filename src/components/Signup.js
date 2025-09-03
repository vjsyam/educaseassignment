import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Create your PopX account</h2>
      <form>
        <label>Full Name *</label>
        <input type="text" placeholder="Enter full name" />

        <label>Phone Number *</label>
        <input type="text" placeholder="Enter phone number" />

        <label>Email Address *</label>
        <input type="email" placeholder="Enter email" />

        <label>Password *</label>
        <input type="password" placeholder="Enter password" />

        <label>Company Name</label>
        <input type="text" placeholder="Enter company name" />

        <label>Are you an Agency? *</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="agency" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="agency" value="no" /> No
          </label>
        </div>

        <button
          type="button"
          className="btn-primary"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
