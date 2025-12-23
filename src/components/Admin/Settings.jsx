import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    showProjects: true,
    emailNotifications: false,
    darkMode: false,
    messages: true,
    reminders: true,
    alerts: false,
    autoSave: true
  });

  const toggleSetting = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Paramètres</h1>

      <div className="settings-grid">

        {/* Profil */}
        <div className="settings-card">
          <h3 className="card-title">Profil</h3>
          <p><strong>Nom :</strong> Sirine Benhlima</p>
          <p><strong>Email :</strong> benhlimasirine11@gmail.com</p>
          <p><strong>Rôle :</strong> Étudiante / Admin</p>
        </div>

        {/* Préférences */}
        <div className="settings-card">
          <h3 className="card-title">Préférences du Dashboard</h3>

          <div className="setting-row">
            <span>Afficher les projets</span>
            <button
              className={`toggle-btn ${settings.showProjects ? "on" : "off"}`}
              onClick={() => toggleSetting("showProjects")}
            />
          </div>

          <div className="setting-row">
            <span>Notifications email</span>
            <button
              className={`toggle-btn ${settings.emailNotifications ? "on" : "off"}`}
              onClick={() => toggleSetting("emailNotifications")}
            />
          </div>

          <div className="setting-row">
            <span>Mode sombre</span>
            <button
              className={`toggle-btn ${settings.darkMode ? "on" : "off"}`}
              onClick={() => toggleSetting("darkMode")}
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="settings-card">
          <h3 className="card-title">Notifications</h3>

          <div className="setting-row">
            <span>Messages reçus</span>
            <button
              className={`toggle-btn ${settings.messages ? "on" : "off"}`}
              onClick={() => toggleSetting("messages")}
            />
          </div>

          <div className="setting-row">
            <span>Rappels de projet</span>
            <button
              className={`toggle-btn ${settings.reminders ? "on" : "off"}`}
              onClick={() => toggleSetting("reminders")}
            />
          </div>

          <div className="setting-row">
            <span>Alertes de tâche</span>
            <button
              className={`toggle-btn ${settings.alerts ? "on" : "off"}`}
              onClick={() => toggleSetting("alerts")}
            />
          </div>
        </div>

        {/* Sauvegarde */}
        <div className="settings-card">
          <h3 className="card-title">Sauvegarde & Export</h3>

          <div className="setting-row">
            <span>Sauvegarde automatique</span>
            <button
              className={`toggle-btn ${settings.autoSave ? "on" : "off"}`}
              onClick={() => toggleSetting("autoSave")}
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Settings;
