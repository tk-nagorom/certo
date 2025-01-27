import React from "react";
import photo1 from "./CertoImage/photo1.png";
import photo2 from "./CertoImage/photo2.png";
import photo3 from "./CertoImage/photo3.png";
import "./latest.css"; // Import the CSS file
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Latest = () => {
  return (
    <div className="latest-container">
      <h3 className="latest-title">Latest insights</h3>
      <div className="latest-grid">
        {/* First Card */}
        <div className="latest-card">
          <button className="card-button expertise">Expertise</button>
          <img
            src={photo1}
            alt="Signs Your Ex Is Spying On You"
            className="card-image"
          />
          <h4 className="card-title">
            Signs Your Ex Is <br /> Spying On You
          </h4>
          <p className="card-text">
            In an ideal world, after a <br />relationship ends both you<br /> and your ex
            will move on. But<br /> what if they can’t let go,<br /> and start spying on
            your...
          </p>
        </div>
        {/* Second Card */}
        <div className="latest-card">
          <button className="card-button guides">Guides</button>
          <img
            src={photo2}
            alt="How To Remove a Hacker from Your Samsung Phone"
            className="card-image"
          />
          <h4 className="card-title">
            How To Remove a <br />
            Hacker from Your <br />
            Samsung Phone
          </h4>
          <p className="card-text">
            Samsung is the second most <br />popular manufacturer of<br /> smartphones in
            the world, <br /> with a market share of <br />28.19% compared to Apple’s<br /> 28.43%
            as...
          </p>
        </div>
        {/* Third Card */}
        <div className="latest-card">
          <button className="card-button expertise">Expertise</button>
          <img
            src={photo3}
            alt="Is Your Phone Under Surveillance?"
            className="card-image" 
          />
          <h4 className="card-title">
            Is Your call <br />
            Phone Under <br />
            Surveillance?
          </h4>
          <p className="card-text">
            In today’s surveillance state, it <br/> can feel like your every move is
            <br />being watched. Although your<br /> mind may be conjuring up <br />images of
            CCTV...
          </p>
        </div>
      </div>
      <div className="latest-button-container">
        <button className="view-all-button">View all insights <TrendingFlatIcon/></button>
      </div>
    </div>
  );
};

export default Latest;
