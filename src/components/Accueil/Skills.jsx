import React from "react";
import { FaTools, FaLanguage } from "react-icons/fa";

const Skills = () => {
  const skills = [
    "Spring Boot", "ASP.NET", "PHP",
    "React.js", "Angular", "Flutter",
    "MySQL", "GitHub", "Postman",
    "Docker", "Power BI", "Python (ML)"
  ];

  const languages = [
    { name: "Français", level: "B2" },
    { name: "Anglais", level: "B1" },
    { name: "Espagnol", level: "Notions" }
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">
        Compétences & Langues
      </h2>

      <div className="skills-grid">

        {/* Compétences */}
        <div className="skills-card">
          <div className="skills-header">
            <FaTools />
            <h3>Compétences techniques</h3>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <span className="skill-badge" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Langues */}
        <div className="skills-card">
          <div className="skills-header">
            <FaLanguage />
            <h3>Langues</h3>
          </div>

          <ul className="language-list">
            {languages.map((lang, index) => (
              <li key={index}>
                <span>{lang.name}</span>
                <span className="level">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
