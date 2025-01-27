import React from 'react';
import Path from './CertoImage/Path.svg';
import svg1 from './CertoImage/svg1.svg';
import svg2 from './CertoImage/svg2.svg';
import svg3 from './CertoImage/svg3.svg';
import './scan.css';

const Scan = () => {
  return (
    <div className="scan-container">
      {/* Top Section */}
      <div className="scan-top">

        {/* Left Column */}
        <div className="scan-left">
          <h2 className="scan-heading">Scan. Detect. Remove.</h2>
          <div className="scan-icons">
            <img src={svg1} alt="Twitter Logo" />
            <img src={svg2} alt="Facebook Logo" />
            <img src={svg3} alt="YouTube Logo" />
          </div>
          <div className="scan-links">
            <h6 className="scan-link">Privacy Policy</h6>
            <h6 className="scan-link">Terms of Service</h6>
          </div>
          <p className="scan-copyright">
            Copyright © 2022 Certo Software Limited | Registered in <br />
            England & Wales No. 10072356
          </p>
          <p className="scan-designed">Designed & developed by Bigger Picture</p>
          <p className="scan-disclaimer">
            Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other <br />
            countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play <br />
            logo are trademarks of Google LLC.
          </p>
        </div>

        {/* Middle Column */}
        <div className="scan-middle">
          <h2 className="scan-heading1">Certo</h2>
          <nav className="scan-nav">
            <h3 className="scan-nav-item">iPhone</h3>
            <h3 className="scan-nav-item">Android</h3>
            <h3 className="scan-nav-item">Help</h3>
            <h3 className="scan-nav-item">About</h3>
            <h3 className="scan-nav-item">Insights</h3>
          </nav>
        </div>

        {/* Right Column */}
        <div className="scan-right">
          <img src={Path} alt="Newsletter Illustration" className="scan-newsletter-img" />
          <h2 className="scan-newsletter-heading">Sign up to our newsletter</h2>
          <p className="scan-newsletter-text">
            Receive the latest mobile security news, exclusive <br /> 
            discounts & offers straight to your inbox
          </p>
          <div className="scan-newsletter-form">
            <input
              type="email"
              placeholder="Email address"
              className="scan-input"
            />
            <button className="scan-button">Submit</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Scan;
