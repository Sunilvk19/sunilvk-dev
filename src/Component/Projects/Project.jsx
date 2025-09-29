import React from 'react';
import './Projects.css';
import Blood from './images/Blood.jpg';
import Bird from './images/Bird.jpg';
import sms from './images/sms.jpg';
import stm from './images/stm.jpg';

function Projects() {
  const projectData = [
    {
      img: Blood,
      title: 'Blood Sample Management System',
      description: `Designed and developed a Blood Sample Management System to efficiently handle
        blood donation requests, donor details, hospital requests, and bloodbank transactions.
        This project showcases expertise in Spring Boot, Hibernate, MySQL, and API development.`,
      link: 'https://github.com/Sunilvk19/BloodBankManagementSystem'
    },
    {
      img: Bird,
      title: 'Bird Species Identification (ML)',
      description: `Used CNN algorithm for image processing to identify bird species from images.
        Even experienced bird watchers sometimes disagree when classifying birds from images.`,
      link: 'https://github.com/Sunilvk19/FinalYearProject'
    },
    {
      img: sms,
      title: 'Student Management System',
      description: `Mini-project built using Java Servlet, JSP, and MySQL. Allows adding, deleting,
        updating, and viewing student details.`,
      link: 'https://github.com/Sunilvk19/Student-Management-System'
    },
    {
        img: stm,
        title: 'Attendance Management System',
        description: `Developed a web-based Attendance Management System using Java, Spring Boot, and MySQL
        to automate attendance tracking and reporting for educational institutions and using basic HTML, CSS, and JavaScript for the frontend.`,
        link: 'https://github.com/Sunilvk19/Attendance-Tracker'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Click Here For More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
