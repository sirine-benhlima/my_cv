import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL =", API_URL);

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      });

      const data = await res.json();
      console.log('API Response:', data);

      if (!res.ok) {
        throw new Error(data.error || 'Erreur de connexion');
      }

      // Sauvegarde du token renvoyé par l'API
      const token = data.token;
      localStorage.setItem('authToken', token);

      if (setIsAuthenticated) setIsAuthenticated(true);

      navigate(from, { replace: true });

    } catch (err) {
      console.warn('API call failed:', err.message);

      // Fallback uniquement pour les identifiants par défaut
      if (email === 'eve.holt@reqres.in' && password === 'cityslicka') {
        const simulatedToken = 'simulated-token-' + Date.now();
        localStorage.setItem('authToken', simulatedToken);
        if (setIsAuthenticated) setIsAuthenticated(true);
        navigate(from, { replace: true });
      } else {
        setError('Identifiants incorrects ou problème de connexion');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Connexion</h1>
        <p className="login-subtitle">
          Connectez-vous pour accéder à l'espace administration.
        </p>

        {error && (
          <div className="login-error">
            <strong>Erreur:</strong> {error}
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
