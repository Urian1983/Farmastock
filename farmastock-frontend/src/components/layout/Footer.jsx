export default function Footer({ onOpenPrivacidad }) {
  return (
    <footer className="pie">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
        <span className="text-muted">© {new Date().getFullYear()} <span className="dato">[Nombre de la farmacia]</span> · Todos los derechos reservados</span>
        <button type="button" className="btn btn-link p-0" onClick={onOpenPrivacidad}>Política de privacidad</button>
      </div>
    </footer>
  );
}
