import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      period: "2020 – Présent",
      title: "Anesthésiste",
      place: "Polyclinique Chams – Sfax",
      description:
        "Participation aux actes anesthésiques et prise en charge des patients en milieu clinique, avec respect strict des protocoles de sécurité.",
    },
    {
      period: "Juillet 2025",
      title: "Stage de fin d’année – Développement Web",
      place: "IIT Sfax",
      description:
        "Développement d’une application web en utilisant Angular, Spring Boot, architecture microservices et authentification JWT.",
    },
  ];

  return (
    <section className="experience-section">
      <h2 className="experience-title">
        Expériences Professionnelles
      </h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            
            {/* Date */}
            <div className="timeline-date">
              <FaCalendarAlt />
              <span>{exp.period}</span>
            </div>

            {/* Point */}
            <div className="timeline-dot">
              <FaBriefcase />
            </div>

            {/* Card */}
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <p className="place">{exp.place}</p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
