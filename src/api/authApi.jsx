import axios from 'axios';

const API_URL = '/api/auth';

export async function loginAdmin(email, password) {
  try {
    const res = await axios.get(API_URL, { params: { email, password } });
    const users = res.data;

    const admin = users.find(
      u => u.email === email.trim() && u.password === password.trim() && u.role === 'ADMIN'
    );

    if (!admin) {
      throw new Error('Accès réservé à l’administrateur');
    }

    localStorage.setItem('isAdminAuth', 'true');
    localStorage.setItem('adminEmail', admin.email);
    localStorage.setItem('adminName', admin.name);

    return admin;
  } catch (err) {
    throw new Error(err.response?.data || err.message || 'Impossible de contacter le serveur');
  }
}
