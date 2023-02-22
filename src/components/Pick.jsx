import React, { useState } from "react";

export default function Pick({ Nav, setNav }) {
  const [Pick, setPick] = useState(0);
  return (
    <div className="Container-Pick">
      <div className="Topic">
        <div className="PicTitle">Pick add-ons</div>
        <div className="SubTitle">
          Add-ons help enhance your gaming expreience.
        </div>
      </div>
      <div className="custom">
        <div
          onClick={() => setPick(1)}
          className={`Pick-Box ${Pick === 1} && "Pick-Colour" `}
        >
          <div className="Pick-align">
            <div className="Check_box" >
              <input type="checkbox"  />
            </div>

            <div className="Box-Content">
              <div className="Box-title">Online service</div>
              <div className="Box-Sub">Access to multiplayer games</div>
            </div>
          </div>
          <div className="Pick-Price">+$1/mo</div>
        </div>
        <div
          onClick={() => setPick(2)}
          className={`Pick-Box ${Pick === 2} && "Pick-Colour" `}
        >
          <div className="Pick-align">
            <div className="Check_box">
              <input type="checkbox" />
            </div>
            <div className="Box-Content">
              <div className="Box-title">Larger storage</div>
              <div className="Box-Sub">Extra 1TB of cloud save</div>
            </div>
          </div>
          <div className="Pick-Price">+$2/mo</div>
        </div>
        <div
          onClick={() => setPick(3)}
          className={`Pick-Box ${Pick === 3} && "Pick-Colour" `}
        >
          <div className="Pick-align">
            <div className="Check_box">
              <input type="checkbox" />
            </div>
            <div className="Box-Content">
              <div className="Box-title">Customizable Profile</div>
              <div className="Box-Sub">Custom theme on your profile</div>
            </div>
          </div>
          <div className="Pick-Price">+$2/mo</div>
        </div>
      </div>
      <div className="Main-Down">
        <div className="back-Container">
          <button className="Back" onClick={() => setNav(2)}>
            Go Back
          </button>
        </div>
        <div className="buttom-container">
          <button className="next" onClick={() => setNav(4)}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
