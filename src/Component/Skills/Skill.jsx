import React from "react";

export default function Skills() {
  const skills = [
    { name: "Java", icon: "fa-brands fa-java" },
    { name: "HTML", icon: "fa-brands fa-html5" },
    { name: "CSS", icon: "fa-brands fa-css3" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "Spring Boot", icon: "fa-brands fa-bootstrap" }, // use custom SVG if needed
    { name: "SQL", icon: "fa-solid fa-database" },
    { name: "Hibernate", icon: "fa-solid fa-code" },
    { name: "React JS", icon: "fa-brands fa-react" },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0b1120] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl shadow-lg 
              hover:shadow-cyan-500/20 hover:-translate-y-2 transition transform text-center"
            >
              <div className="text-4xl text-cyan-300 mb-3 group-hover:scale-110 transition">
                <i className={skill.icon}></i>
              </div>

              <h3 className="text-lg font-semibold">{skill.name}</h3>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-xl pointer-events-none transition cursor-pointer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
