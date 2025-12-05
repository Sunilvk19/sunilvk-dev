import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0b1120] text-white cursor-pointer">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-12">
          Contact <span className="text-cyan-300">Me</span>
        </h2>

        {/* Contact Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-lg hover:shadow-cyan-500/20 transition">

          <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
            Let’s Connect
          </h3>

          <p className="text-gray-300 max-w-md mx-auto mb-8">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello.
          </p>

          {/* Contact Details */}
          <div className="grid sm:grid-cols-2 gap-10 text-left max-w-2xl mx-auto">

            {/* Location */}
            <div className="flex items-start gap-4">
              <i className="fas fa-map-marker-alt text-3xl text-cyan-300"></i>
              <div>
                <h4 className="text-lg font-semibold">Location</h4>
                <p className="text-gray-300 text-sm">Bangalore, Karnataka, India</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <i className="fas fa-envelope text-3xl text-cyan-300"></i>
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-300 text-sm">sunil27vk@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/Sunilvk19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-300 transition"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/sunil-kumar-683b5130b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-300 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://x.com/sunilKyadappa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-300 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://www.instagram.com/photogenicworld_1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-300 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
