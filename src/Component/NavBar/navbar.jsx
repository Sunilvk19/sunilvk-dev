import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'about', 'projects', 'contact'];
      let currentSection = 'home';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="modern-navbar">
      <div className="navbar-brand">TechReactor</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-tabs ${menuOpen ? 'open' : ''}`}>
        {['home', 'skills', 'about', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              onClick={() => handleClick(item)}
              className={active === item ? 'active' : ''}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
