import React from "react";
import Blood from "./images/Blood.jpg";
import Bird from "./images/Bird.jpg";
import sms from "./images/sms.jpg";
import stm from "./images/stm.jpg";

export default function Projects() {
  const projectData = [
    {
      img: Blood,
      title: "Blood Sample Management System",
      description:
        "A full-stack system to manage blood donors, hospital requests, and blood bank operations using Spring Boot, Hibernate, and MySQL.",
      link: "https://github.com/Sunilvk19/BloodBankManagementSystem",
    },
    {
      img: Bird,
      title: "Bird Species Identification",
      description:
        "Machine Learning project using CNN models to classify bird species from images with high accuracy.",
      link: "https://github.com/Sunilvk19/FinalYearProject",
    },
    {
      img: sms,
      title: "Student Management System",
      description:
        "Java Servlet + JSP based CRUD application for managing student records efficiently.",
      link: "https://github.com/Sunilvk19/Student-Management-System",
    },
    {
      img: stm,
      title: "Attendance Management System",
      description:
        "Spring Boot + MySQL based attendance tracking system with automated reporting.",
      link: "https://github.com/Sunilvk19/Attendance-Tracker",
    },
  ];

  return (
    <section id="projects" className="w-full py-24 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="text-cyan-300">Projects</span>
        </h2>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition transform hover:-translate-y-2 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="overflow-hidden h-48">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Button */}
              <div className="p-5 pt-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-cyan-500/30 hover:bg-cyan-400/40 border border-cyan-300/40 text-cyan-200 font-semibold py-2 rounded-lg backdrop-blur-md transition"
                >
                  View Project →
                </a>
              </div>

              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/20 to-transparent pointer-events-none transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
