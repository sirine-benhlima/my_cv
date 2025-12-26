import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      const res = await fetch('http://localhost:4000/auth'); // <-- json-server
      const data = await res.json();

      const admin = data.find(
        a =>
          a.email === email.trim() &&
          a.password === password.trim()
      );

      if (!admin) {
        throw new Error('Accès réservé à l’administrateur');
      }

      localStorage.setItem('isAdminAuth', 'true');
      localStorage.setItem('adminEmail', admin.email);

      if (setIsAuthenticated) {
        setIsAuthenticated(true);
      }

      navigate('/admin', { replace: true });

    } catch (err) {
      setError(err.message);
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
