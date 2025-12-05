import React from "react";
import resume from "./sunil-R-FullStack.pdf";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0b1120] text-white cursor-pointer">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12">
          About <span className="text-cyan-300">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - About Description */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
              Who I Am
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I am a passionate and dedicated software developer with a Master's
              degree in Computer Applications (MCA). I focus on building
              scalable, efficient, and user-friendly web applications. I keep
              upgrading my skills continuously and love working across both
              frontend and backend.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Education */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:-translate-y-2 transition shadow-lg hover:shadow-cyan-500/20">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">
              Education
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>MCA – Master of Computer Applications</li>
              <li>BSc – Computer Science</li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:-translate-y-2 transition shadow-lg hover:shadow-cyan-500/20">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">
              Technical Skills
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Languages: Java, JavaScript, HTML, CSS, React</li>
              <li>Frameworks: Spring Boot, Hibernate</li>
              <li>Database: SQL</li>
              <li>Tools: Git, VS Code, Eclipse, IntelliJ IDEA</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-xl hover:-translate-y-2 transition shadow-lg hover:shadow-cyan-500/20">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">
              Soft Skills
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Problem-Solving</li>
              <li>Team Collaboration</li>
              <li>Communication</li>
              <li>Time Management</li>
            </ul>
          </div>
          <div className="flex md:justify-end md:items-start items-center md:mt-0 mt-6">
            <a
              href={resume}
              download={true}
              className="px-8 py-4 bg-cyan-500/30 border border-cyan-300/40 rounded-xl text-cyan-200 font-semibold backdrop-blur-md hover:bg-cyan-400/40 transition shadow-lg hover:shadow-cyan-400/20"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
