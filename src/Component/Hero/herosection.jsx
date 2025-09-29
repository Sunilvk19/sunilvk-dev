import React from 'react'
import './hero.css'
import portfolioImg from './portfolio.jpg'; 
function Hero() {
  return (
    <div>
      <section className="hero-section" id='home'>
        <div className="hero-content animate-fade-in">
          <div className="hero-photo animate-slide-in-left">
            <img
              src={portfolioImg}
              alt="My Portrait"
              className="profile-img"
            />
          </div>
          <div className="hero-text">
            <h1>Hello, I'm SunilKumar</h1>
            <h2 className='fade-in-text'>Developer</h2>
            <p>Passionate Java Full Stack Developer eager to kick-start my journey in the tech industry, with a strong foundation in frontend 
              and backend development.</p>
            <a href="#contact" className="hero-btn">Contact Me</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;
