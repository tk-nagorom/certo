import React, { useState, useEffect, useRef } from 'react';
import logocerto from './Certoimage/logocerto.svg';
import './Topbar.css';
import MenuIcon from '@mui/icons-material/Menu';

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu container
  const menuIconRef = useRef(null); // Reference for the menu icon

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) && 
        menuIconRef.current && !menuIconRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    // Attach event listener to document
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="topbar">
        <div className="topbar-logo">
          <img src={logocerto} alt="Company Logo" />
        </div>
        {/* Links for large screens */}
        <div className={`topbar-links ${menuOpen ? 'open' : ''}`} ref={menuRef}>
          <a href="#" aria-label="iPhone section">iPhone</a>
          <a href="#" aria-label="Android section">Android</a>
          <a href="#" aria-label="Help section">Help</a>
          <a href="#" aria-label="Company section">Company</a>
        </div>
        <div className="topbar-auth">
          <button aria-label="Sign in button">Sign in</button>
        </div>
        {/* Menu Icon for small screens */}
        <div className="menu-icon" onClick={toggleMenu} ref={menuIconRef}>
          <MenuIcon />
        </div>
      </div>
    </>
  );
};

export default Topbar;
