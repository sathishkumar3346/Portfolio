import React, { useState } from 'react';
import './Header.css'; 
import { PiStudentThin } from "react-icons/pi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
     <div style={{display:'flex'}}><PiStudentThin style={{marginLeft:'10px',marginTop:'1px',fontSize:'60px',color:'orange'}} /> <h1>Portfolio</h1></div>  
      <button
        className="menu-toggle"
        aria-label="Toggle Menu"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <nav className={isMenuOpen ? 'active' : ''}>
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href='#skills'>Skills</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
