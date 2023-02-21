import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="nav">
          <div className="nav-box" id="1">
            <div className="circle">1</div>
            <div className="nav-text">
              <div className="det-1">step 1</div>
              <div className="det-2">YOUR INFO</div>
            </div>
          </div>
          <div className="nav-box" id="2">
            <div className="circle">2</div>
            <div className="nav-text">
              <div className="det-1">step 2</div>
              <div className="det-2">SELECT PLAN</div>
            </div>
          </div>
          <div className="nav-box" id="3">
            <div className="circle">3</div>
            <div className="nav-text">
              <div className="det-1">step 3</div>
              <div className="det-2">ADD ONES</div>
            </div>
          </div>
          <div className="nav-box" id="4">
            <div className="circle">4</div>
            <div className="nav-text">
              <div className="det-1">step 4</div>
              <div className="det-2">SUMMARY</div>
            </div>
          </div>
        </div>
          <PersonalInfo />
      </div>
    </div>
  );
}
