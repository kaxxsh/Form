import React, { useState } from "react";
import Arcade from "../assets/icon-arcade.svg";
import Advanced from "../assets/icon-advanced.svg";
import Pro from "../assets/icon-pro.svg";
export default function Plan({ Nav, setNav }) {
  const [Plan, setPlan] = useState(1);
  return (
    <div className="container-Plan">
      <div className="heading">
        <div className="Plan-title">Select your Plans</div>
        <div className="Plan-subtitle">
          You have the option of monthly and yearly billing
        </div>
      </div>
      <div className="Main-Plan">
        <div className="Select-Plans">
          <div
            onClick={() => setPlan(1)}
            className={`Plan-design ${Plan === 1 && "selected-plan"}`}
          >
            <div className="image">
              <img src={Arcade} />
            </div>
            <div className="Plan-Main-Contant">
              <div className="Plan-Content1">Arcard</div>
              <div className="Plan-Content2">$9/mon</div>
            </div>
          </div>
          <div
            onClick={() => setPlan(2)}
            className={`Plan-design ${Plan === 2 && "selected-plan"}`}
          >
            <div className="image">
              <img src={Advanced} />
            </div>
            <div className="Plan-Main-Contant">
              <div className="Plan-Content1">Advance</div>
              <div className="Plan-Content2">$12/mon</div>
            </div>
          </div>
          <div
            onClick={() => setPlan(3)}
            className={`Plan-design ${Plan === 3 && "selected-plan"}`}
          >
            <div className="image">
              <img src={Pro} />
            </div>
            <div className="Plan-Main-Contant">
              <div className="Plan-Content1">Pro</div>
              <div className="Plan-Content2">$15/mon</div>
            </div>
          </div>
        </div>
        <div className="Plan-Timing">
          <div className="Montly">Montly</div>
          <div className="Montly">yearly</div>
        </div>
      </div>
      <div className="Main-Down">
        <div className="back-Container">
          <button className="Back" onClick={() => setNav(1)}>Go Back</button>
        </div>
        <div className="buttom-container">
          <button className="next" onClick={() => setNav(3)}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
