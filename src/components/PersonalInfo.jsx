import React, { useState } from "react";
import "../App.css";

function PersonalInfo() {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  return (
    <div className="personalInfo">
      <div className="head-container">
        <div className="title">Personal Info</div>
        <div className="desc">
          Please provide your name,email and phone number
        </div>
      </div>
      <div className="input-container">
        <div className="input-item">
          <label htmlFor="1">Name</label>
          <input id="1" type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-item">
          <label htmlFor="2">Email Address</label>
          <input
            id="2"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-item">
          <label htmlFor="3">Phone Number</label>
          <input
            id="3"
            type="Integer"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="buttom-container">
        <button>Next Step</button>
      </div>
    </div>
  );
}

export default PersonalInfo;
