import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./formulaire.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Formulaire envoyé :", formData);
    setFormData({
      nom: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="py-20 bg-[#f0f4f8]">
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>

        {submitted && (
          <p className={styles.successMessage}>Message envoyé avec succès !</p>
        )}

        <form onSubmit={handleSubmit} className={styles.formulaire}>
          <input
            type="text"
            name="nom"
            placeholder="Nom et Prénom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Envoyer</button>
        </form>

        {/* Informations de contact stylées */}
        <div className={styles.contactCards}>
          <div className={styles.contactCard}>
            <FaEnvelope className={styles.icon} />
            <p>benhlimasirine11@gmail.com</p>
          </div>
          <div className={styles.contactCard}>
            <FaLinkedin className={styles.icon} />
            <p>www.linkedin.com/in/sirine-benhlima-656102370</p>
          </div>
          <div className={styles.contactCard}>
            <FaPhone className={styles.icon} />
            <p>+216 26 068 027</p>
          </div>
          <div className={styles.contactCard}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>Tunisie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
