import React, { useState } from 'react';
import logocerto from './Certoimage/logocerto.svg';
import './Topbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Topbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      {/* Navbar for large screens */}
      <div className="topbar large-screen">
        <div className="topbar-logo">
          <img src={logocerto} alt="Company Logo" />
        </div>
        <div className="topbar-links">
          <a href="#" aria-label="iPhone section">iPhone</a>
          <a href="#" aria-label="Android section">Android</a>
          <a href="#" aria-label="Help section">Help</a>
          <a href="#" aria-label="Help section">Company <KeyboardArrowDownIcon/></a>
        </div>
        <div className="topbar-auth">
          <button aria-label="Sign in button">Sign in</button>
        </div>
      </div>

      {/* Navbar for small screens */}
      <div className="topbar small-screen">
        <div className="topbar-left">
          <div className="topbar-logo">
            <img src={logocerto} alt="Company Logo" />
          </div>
          <MenuIcon onClick={toggleDropdown} className="menu-icon" />
        </div>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <a href="#" aria-label="iPhone section">iPhone</a>
            <a href="#" aria-label="Android section">Android</a>
            <a href="#" aria-label="Help section">Help</a>
            <a href="#" aria-label="Help section">Company <KeyboardArrowDownIcon/></a>
            <button aria-label="Sign in button" className="dropdown-signin">Sign in</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Topbar;
