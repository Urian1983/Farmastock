import { useCallback, useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './features/auth/LoginPage';
import MedicamentosSection from './features/medicamentos/MedicamentosSection';
import FarmaceuticosSection from './features/farmaceuticos/FarmaceuticosSection';
import ClientesSection from './features/clientes/ClientesSection';
import PrivacidadModal from './features/privacidad/PrivacidadModal';
import Footer from './components/layout/Footer';

function Shell() {
  const { session, isFarmaceutico } = useAuth();
  const [privacidad, setPrivacidad] = useState(false);
  const cerrar = useCallback(() => setPrivacidad(false), []);
  return (
    <>
      {session ? (
        <main className="container-fluid py-4">
          <MedicamentosSection />
          {isFarmaceutico && <FarmaceuticosSection />}
          {isFarmaceutico && <ClientesSection />}
        </main>
      ) : <LoginPage />}
      <Footer onOpenPrivacidad={() => setPrivacidad(true)} />
      {privacidad && <PrivacidadModal onClose={cerrar} />}
    </>
  );
}

export default function App() {
  return <AuthProvider><Shell /></AuthProvider>;
}
