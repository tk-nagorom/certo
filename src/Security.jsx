import React from 'react';
import Ado from './CertoImage/Ado.png';
import './Security.css'; // Importing the CSS file
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Security = () => {
  return (
    <div className="security-container">
      {/* Text Section */}
      <div className="text-section">
        <h3 className="heading">
          At Certo, mobile security <br /> is not an afterthought, it's <br /> what we do
        </h3>
        <p className="description">
          With years of experience in mobile security and <br /> spyware detection, our products have helped <br /> countless people safeguard their devices and <br /> find peace of mind.
        </p>
        <div className="touch">
          <button className="button iphone">Get Certo for iPhone <TrendingFlatIcon/></button>
          </div>

          <div>
          <button className="button android">Get Certo for Android</button>
        </div>
      </div>

      {/* Image Section */}
      <div className="image-section">
  <div className="square"></div>
  <img src={Ado} alt="Company Logo" className="imagesecurity" />
</div>

    </div>
  );
};

export default Security;
