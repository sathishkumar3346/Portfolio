import React, { useState } from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1>My Portfolio</h1>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
