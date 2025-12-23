import React, { useState } from "react";

const AdminUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Jean Dupont", email: "jean@example.com", role: "Admin" },
    { id: 2, name: "Marie Martin", email: "marie@example.com", role: "User" },
    { id: 3, name: "Paul Bernard", email: "paul@example.com", role: "User" },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "User",
  });

  /* ===== FILTER ===== */
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  /* ===== ADD ===== */
  const handleAdd = () => {
    if (!form.name || !form.email) return;

    setUsers([...users, { id: Date.now(), ...form }]);
    closeModal();
  };

  /* ===== EDIT ===== */
  const handleEdit = (user) => {
    setForm(user);
    setCurrentId(user.id);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleUpdate = () => {
    setUsers(
      users.map((u) =>
        u.id === currentId ? { ...u, ...form } : u
      )
    );
    closeModal();
  };

  /* ===== DELETE ===== */
  const handleDelete = (id) => {
    if (window.confirm("Supprimer cet utilisateur ?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setIsEdit(false);
    setForm({ name: "", email: "", role: "User" });
    setCurrentId(null);
  };

  return (
    <div className="admin-container">

      {/* ===== HEADER ===== */}
      <div className="admin-header">
        <h1 className="admin-title">Gestion des Utilisateurs</h1>
        <button className="admin-add-btn" onClick={() => setShowModal(true)}>
          + Ajouter
        </button>
      </div>

      {/* ===== SEARCH ===== */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher par nom, email ou rôle..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ===== TABLE ===== */}
      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Rôle</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((u) => (
                <tr key={u.id}>
                  <td className="font-bold">{u.name}</td>
                  <td className="text-gray">{u.email}</td>
                  <td>
                    <span
                      className={`role-badge ${
                        u.role === "Admin" ? "role-admin" : "role-user"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="text-center">
                    <button
                      className="admin-btn edit"
                      onClick={() => handleEdit(u)}
                    >
                      Modifier
                    </button>
                    <button
                      className="admin-btn delete"
                      onClick={() => handleDelete(u.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">
                  Aucun utilisateur trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ===== MODAL ===== */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{isEdit ? "Modifier utilisateur" : "Ajouter utilisateur"}</h3>

            <input
              type="text"
              placeholder="Nom"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <select
              value={form.role}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
            >
              <option>User</option>
              <option>Admin</option>
            </select>

            <div className="modal-actions">
              <button
                className="admin-btn edit"
                onClick={isEdit ? handleUpdate : handleAdd}
              >
                {isEdit ? "Enregistrer" : "Ajouter"}
              </button>
              <button className="admin-btn delete" onClick={closeModal}>
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
