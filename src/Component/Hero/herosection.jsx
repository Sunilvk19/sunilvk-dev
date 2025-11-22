import React from "react";
import portfolioImg from "./portfolio.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-6 pt-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] opacity-90"></div>

      {/* Glow effects */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-400/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[150px]"></div>

      {/* Content */}
      <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center gap-16 text-white z-10">
        
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={portfolioImg}
            alt="Sunil Kumar"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white/10 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Hello, I'm <span className="text-cyan-300">Sunil Kumar</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 mt-2">
            Full Stack Developer
          </h2>

          <p className="text-gray-200 mt-4 leading-relaxed max-w-lg">
            Passionate Java Full Stack Developer eager to kick-start my journey
            in the tech industry, with a strong foundation in frontend and
            backend development.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-cyan-500/30 border border-cyan-300/40 hover:bg-cyan-400/40 transition-all font-semibold backdrop-blur-md"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0f172a"
          fillOpacity="1"
          d="M0,160L60,186.7C120,213,240,267,360,272C480,277,600,235,720,186.7C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
