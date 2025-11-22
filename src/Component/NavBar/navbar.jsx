import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "about", "projects", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const sec = document.getElementById(id);
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) current = id;
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Brand */}
        <div className="text-2xl font-bold text-cyan-300 tracking-wide">
          TechReactor
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col gap-[6px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-7 h-[3px] bg-white rounded"></span>
          <span className="w-7 h-[3px] bg-white rounded"></span>
          <span className="w-7 h-[3px] bg-white rounded"></span>
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex gap-6 items-center text-white font-medium hidden`}
        >
          {["home", "skills", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setActive(item)}
                className={`px-4 py-2 rounded-full transition-all ${
                  active === item
                    ? "bg-cyan-400/20 text-cyan-300 border border-cyan-300/30"
                    : "hover:bg-white/10"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-16 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 flex flex-col gap-4 md:hidden shadow-xl text-white">
            {["home", "skills", "about", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => {
                    setActive(item);
                    setMenuOpen(false);
                  }}
                  className={`block px-4 py-2 rounded-lg ${
                    active === item
                      ? "bg-cyan-400/20 text-cyan-300 border border-cyan-300/30"
                      : "hover:bg-white/10"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
