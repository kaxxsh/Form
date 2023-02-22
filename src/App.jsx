import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Plan from "./components/Plan";
import Pick from "./components/Pick";
import "./App.css";
export default function App() {
  const [Nav, setNav] = useState(1);

  return (
    <div className="App">
      <div className="container">
        <div className="nav">
          <div className="nav-box" id="1" onClick={() => setNav(1)}>
            <div className={`circle ${Nav === 1 && "Circle-Colour"}`}>1</div>
            <div className="nav-text">
              <div className="det-1">step 1</div>
              <div className="det-2">YOUR INFO</div>
            </div>
          </div>
          <div className="nav-box" id="2" onClick={() => setNav(2)}>
            <div className={`circle ${Nav === 2 && "Circle-Colour"}`}>2</div>
            <div className="nav-text">
              <div className="det-1">step 2</div>
              <div className="det-2">SELECT PLAN</div>
            </div>
          </div>
          <div className="nav-box" id="3" onClick={() => setNav(3)}>
            <div className={`circle ${Nav === 3 && "Circle-Colour"}`}>3</div>
            <div className="nav-text">
              <div className="det-1">step 3</div>
              <div className="det-2">ADD ONES</div>
            </div>
          </div>
          <div className="nav-box" id="4" onClick={() => setNav(4)}>
            <div className={`circle ${Nav === 4 && "Circle-Colour"}`}>4</div>
            <div className="nav-text">
              <div className="det-1">step 4</div>
              <div className="det-2">SUMMARY</div>
            </div>
          </div>
        </div>
        {Nav === 1 ? (
          <PersonalInfo {...{ Nav, setNav }} />
        ) : Nav === 2 ? (
          <Plan {...{ Nav, setNav }} />
        ) : Nav === 3?(
          <Pick {...{ Nav, setNav }} />
        ):<div></div>}
      </div>
      
    </div>
  );
}
