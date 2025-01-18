import React from 'react';
import './someone.css';  // Importing the CSS file
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Someone = () => {
  return (
    <div className="someone-container">
      <div className="someone-content">
        <h3 className="someone-title">Is someone spying on your phone?</h3>
        <h5 className="someone-subtitle">Find out with Certo</h5>

        <div className="button-container">
          <button className="button button-iphone">Get Certo for iPhone <TrendingFlatIcon/></button>
          <button className="button button-android">Get Certo for Android</button>
        </div>
      </div>
    </div>
  );
};

export default Someone;
