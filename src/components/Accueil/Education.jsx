import React from "react";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      period: "En cours",
      title: "Licence en Génie Logiciel et Systèmes Informatiques",
      place: "IIT Sfax",
    },
    {
      period: "2017 – 2019",
      title: "Licence Professionnelle en Anesthésie",
      place: "UPSAT Sfax",
    },
    {
      period: "Baccalauréat",
      title: "Baccalauréat Scientifique",
      place: "Lycée Taieb Mhiri – Sfax",
    },
  ];

  return (
    <section className="education-section">
      <h2 className="education-title">
        Formation Académique
      </h2>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <div className="education-item" key={index}>

            {/* Date */}
            <div className="education-date">
              <FaCalendarAlt />
              <span>{edu.period}</span>
            </div>

            {/* Point */}
            <div className="education-dot">
              <FaGraduationCap />
            </div>

            {/* Card */}
            <div className="education-content">
              <h3>{edu.title}</h3>
              <p className="place">{edu.place}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
