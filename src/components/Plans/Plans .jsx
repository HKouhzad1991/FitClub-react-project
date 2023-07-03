import React from "react";
import { plansData } from "../../data/plansData";
import "./Plans.css";
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* plans card */}
      
      <div className="plans">
        {plansData.map((plan, i)=>(
          <div className="plan">
          <plan className="icon"></plan>
          </div>
  ))}
      </div>

    </div>
  );
};

export default Plans;
