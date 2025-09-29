import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Component/NavBar/navbar.jsx'
import Hero from './Component/Hero/herosection.jsx'
import About  from './Component/About/about.jsx'
import Skills from './Component/Skills/Skill.jsx'
import Projects from './Component/Projects/Project.jsx'
import Footers from './Component/Footer/Footers.jsx'
import Contact from './Component/Contact/Contact.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Navbar />
    <Hero />
    <Skills />
    <About />
    <Projects />
    <Contact />
    <Footers />
  </StrictMode>,
)
