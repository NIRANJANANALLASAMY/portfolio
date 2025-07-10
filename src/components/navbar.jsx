import React, { useState } from 'react';
import "../style/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">My Portfolio</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a onClick={() => scrollToSection('home')}>Home</a>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('projects')}>Projects</a>
        <a onClick={() => scrollToSection('skills')}>Skills</a>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </div>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
