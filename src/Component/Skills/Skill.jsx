import React from 'react';
import './Skill.css'; // Make sure your styles are in this CSS file

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill">
            <i className="fa-brands fa-java"></i>
            <h3>Java</h3>
          </div>
          <div className="skill">
            <i className="fa-brands fa-html5"></i>
            <h3>HTML</h3>
          </div>
          <div className="skill">
            <i className="fa-brands fa-css3"></i>
            <h3>CSS</h3>
          </div>
          <div className="skill">
            <i className="fa-brands fa-js"></i>
            <h3>JavaScript</h3>
          </div>
          <div className="skill">
            <span className="spring-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M20.59 5.41a9.84 9.84 0 0 1-1.41 13.77A9.83 9.83 0 0 1 3.41 17.6a9.84 9.84 0 0 1 1.41-13.77A9.83 
                  9.83 0 0 1 20.59 5.41zM12 4.07a8.77 8.77 0 1 0 8.77 8.77A8.77 8.77 0 0 0 
                  12 4.07zm5.76 12.04a6.63 6.63 0 0 1-7.55-1.14 6.62 6.62 0 0 1-1.15-7.54 6.14 6.14 0 0 0 2.84 3.45 6.13 
                  6.13 0 0 0 3.45.84 6.14 6.14 0 0 0 2.84-3.45 6.13 6.13 0 0 0 .84-3.45 6.63 6.63 0 0 1-1.27 11.29z"
                />
              </svg>
            </span>
            <h3>Spring Boot</h3>
          </div>
          <div className="skill">
            <i className="fa-solid fa-database"></i>
            <h3>SQL</h3>
          </div>
          <div className="skill">
            <i className="fa-solid fa-code"></i>
            <h3>Hibernate</h3>
          </div>
          <div className="skill">
            <i className="fa-brands fa-react"></i>
            <h3>React js</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
