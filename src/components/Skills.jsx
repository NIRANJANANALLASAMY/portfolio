import React from 'react';
import '../style/skills.css';
import { FaCode, FaDatabase, FaJava, FaGitAlt, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const technicalSkills = [
  { name: 'C', icon: <FaCode /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const softSkills = [
  'Communication', 'Growth mindset', 'Time management', 'Adaptability',
    'Teamwork', 'Leadership'
];

const interests = ['Web Development', 'Database Management'];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>

      <div className="skills-section tech-icons">
        <h3>Technical Skills</h3>
        <div className="tech-skill-icons">
          {technicalSkills.map((skill, idx) => (
            <div className="tech-icon-item" key={idx}>
              <span className="icon">{skill.icon}</span>
              <span className="icon-label">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-flex-row">
        <div className="skills-section soft-skills-col">
          <h3>Soft Skills</h3>
          <div className="soft-skills-list">
            {softSkills.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="skills-section interests-col">
          <h3>Area of Interest</h3>
          <div className="interests-list">
            {interests.map((interest, i) => (
              <span key={i} className="interest-tag">{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
