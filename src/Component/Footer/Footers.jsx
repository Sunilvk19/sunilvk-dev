import React from 'react';
import './Footer.css';

function Footers() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sunil | All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Sunilvk19" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sunil-kumar-683b5130b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
