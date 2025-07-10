import React from "react";
import "../style/about.css";
import profileImage from "../assets/myphoto.jpeg"; // Replace with your image
import resume from "../assets/resume.pdf"; // Replace with your resume path

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        
        <div className="about-text">
          <h2>About Me</h2>
          <p>Hello! I’m  a passionate and motivated individual with a keen interest in technology and creativity. I enjoy solving problems, building meaningful projects, 
            and continuously learning new skills.<br></br>I have experience working on diverse projects that showcase my ability to adapt, collaborate, and deliver results. My interests lie in areas like web development, software design, and exploring innovative solutions that make a difference.<br>
          </br>Outside of work, I enjoy exploring new ideas, learning about emerging trends, and connecting with like-minded people. I believe in growth through curiosity and perseverance.</p>
          <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-button">
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
