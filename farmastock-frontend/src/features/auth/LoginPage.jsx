import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Field from '../../components/ui/Field';

export default function LoginPage() {
  const { login } = useAuth();
  const [form, setForm] = useState({ usuario: '', clave: '' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.usuario.trim() || !form.clave) return setError('Por favor complete todos los campos.');
    setBusy(true); setError('');
    try { await login(form.usuario.trim(), form.clave); }
    catch (err) { setError(err.message); setBusy(false); }
  }

  return (
    <main id="Login" className="container">
      <div className="row justify-content-center w-100">
        <div className="col-md-5 col-lg-4">
          <form className="login-card" onSubmit={onSubmit} noValidate>
            <h1 className="h3 text-center mb-4 font-weight-bold">Iniciar Sesión</h1>
            <Field label="Nombre de usuario" value={form.usuario} onChange={set('usuario')} autoComplete="username" placeholder="Ingrese su usuario" required />
            <Field label="Clave" type="password" value={form.clave} onChange={set('clave')} autoComplete="current-password" placeholder="••••••••" required />
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <button type="submit" className="btn btn-primary btn-block" disabled={busy}>{busy ? 'Comprobando…' : 'Ingresar'}</button>
          </form>
        </div>
      </div>
    </main>
  );
}
