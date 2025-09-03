import React from "react";

function Account() {
  return (
    <div className="card account">
      <h2>Account Settings</h2>
      <div className="profile">
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="profile-img"
        />
        <div>
          <h3>Marry Doe</h3>
          <p>Marry@gmail.com</p>
        </div>
      </div>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
      </p>
    </div>
  );
}

export default Account;
