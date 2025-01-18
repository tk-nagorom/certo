// src/components/Read.jsx
import React from "react";
import "./Read.css";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Read = () => {
  return (
    <div className="read-container">
      {/* Left Card */}
      <div className="read-card-left">
        <h3 className="read-heading-left">Read our story</h3>
        <p className="read-paragraph">
          Find out why thousands trust Certo to secure <br /> their mobile world.
        </p>
        <button className="read-button-primary">About us  <TrendingFlatIcon/></button>
      </div>

      {/* Right Card */}
      <div className="read-card-right">
        <h4 className="read-heading-right">Help Center</h4>
        <p className="read-paragraph">
          Help topics, getting <br /> started guides and FAQs.
        </p>
        <button className="read-button-secondary">Visit help center</button>
      </div>
    </div>
  );
};

export default Read;
