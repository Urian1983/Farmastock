import { useAuth } from '../../context/AuthContext';

export default function AppHeader({ children }) {
  const { session, logout } = useAuth();
  return (
    <header className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h1 className="h3 font-weight-bold mb-0" id="titulo-meds">Medicamentos</h1>
        <small className="text-muted">Sesión: <b>{session.username}</b> ({session.role})</small>
      </div>
      <div>
        {children}
        <button type="button" className="btn btn-outline-secondary" onClick={logout}>Cerrar sesión</button>
      </div>
    </header>
  );
}
