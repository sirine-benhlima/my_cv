// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../api/authApi'; // service adapté avec Axios

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const admin = await loginAdmin(email, password); // appel service Axios

      // Stocker les infos de session localement
      localStorage.setItem('adminEmail', admin.email);
      localStorage.setItem('adminName', admin.name);
      localStorage.setItem('isAdminAuth', 'true');

      if (setIsAuthenticated) setIsAuthenticated(true);

      // Redirection vers l'espace admin
      navigate('/admin', { replace: true });
    } catch (err) {
      // Affichage de l'erreur
      setError(err.message || 'Erreur lors de la connexion');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Connexion Administrateur</h1>
        <p className="login-subtitle">
          Accès réservé à l’administrateur
        </p>

        {error && (
          <div className="login-error">
            <strong>Erreur :</strong> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading} className="login-btn">
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
