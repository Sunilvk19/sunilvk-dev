import React from 'react'
import './about.css';
import resume from  './sunil.pdf';

function About() {
return (
   <section id="about" className='about'>
    <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
            I am a passionate and dedicated software developer with a Master's in Computer Applications (MCA).
            With a strong foundation in full-stack development, I specialize in building scalable web applications,
            and know some other programming languages mentioned below. I am always eager to learn new technologies.
        </p>
        <div className="education">
            <h3>Education</h3>
            <ul>
                <li>Master of Computer Application (MCA)</li>
                <li>Bachelore of Science in Computer Science (BSc)</li>
            </ul>
        </div>
        <div className="technical-skills">
            <h3>Technical Skills</h3>
            <ul>
                <li>Languages:Java,JavaScript,HTML5,CSS3,Reactjs.</li>
                <li>FrameWork:SpringBoot,Hibernate.</li>
                <li>DataBase: SQL.</li>
                <li>Tools:Git, VS Code, Eclipse, Intellij IDEA.</li>
            </ul>
        </div>
        <div className="soft-skills">
            <h3>Soft Skills</h3>
            <ul>
                <li>Problem-solving</li>
                <li>TeamWork</li>
                <li>Conversational</li>
                <li>Time Management</li>
            </ul>
        </div>
    </div>
    <div className="about-cta">
        <a href={resume} className='cta' download={true}>Download Resume</a>
    </div>
</section>
)
}

export default About;
