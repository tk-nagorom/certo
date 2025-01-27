import React from "react";
import "./Spyware.css"; // Import the CSS file
import div1 from "./CertoImage/div1.svg";
import div2 from "./CertoImage/div2.svg";
import div3 from "./CertoImage/div3.svg";
import div4 from "./CertoImage/div4.svg";
import div5 from "./CertoImage/div5.svg";
import div6 from "./CertoImage/div6.svg";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Spyware = () => {
  return (
    <div className="spyware-container">
  <div className="spyware-header">
    <h2>Get your freedom back, stop mobile <br /> spyware today</h2>
  </div>
  <div className="spyware-grid">
    {/* Spyware detection cards */}
    <div className="spyware-card">
      <img src={div1} alt="Spyware Detection" />
      <h3>Spyware detection</h3>
      <p>
        Our advanced spyware detection engine can identify if a device
        contains spyware or bugging software.
      </p>
    </div>
    <div className="spyware-card">
      <img src={div2} alt="Keylogger Detection" />
      <h3>Keylogger detection</h3>
      <p>
        Find malicious keyboards installed on your device that could allow
        someone to record things you type (e.g., passwords).
      </p>
    </div>
    <div className="spyware-card">
      <img src={div3} alt="Find Tracking Apps" />
      <h3>Find tracking apps</h3>
      <p>
        Check which apps can access your location, microphone, or camera.
        Get alerted if a known tracking app is installed.
      </p>
    </div>
    <div className="spyware-card">
      <img src={div4} alt="OS Integrity Check" />
      <h3>OS integrity check</h3>
      <p>
        Analyze your operating system for signs of tampering that could
        compromise security, such as Jailbreaking.
      </p>
    </div>
    <div className="spyware-card">
      <img src={div5} alt="Threat Removal" />
      <h3>Threat removal</h3>
      <p>
        Our intelligent scan will either safely remove threats for you or
        provide easy-to-follow instructions.
      </p>
    </div>
    <div className="spyware-card">
      <img src={div6} alt="Easy to Use" />
      <h3>Easy to use</h3>
      <p>
        We create easy-to-use apps that can check your device for
        vulnerabilities in a matter of minutes.
      </p>
    </div>
    {/* Buttons */}
    <div className="spyware-buttons">
      <button className="button-primary">Get Certo for iPhone <TrendingFlatIcon /></button>
      <button className="button-secondary">Get Certo for Android</button>
    </div>
  </div>
</div>

  
  );
};

export default Spyware;
