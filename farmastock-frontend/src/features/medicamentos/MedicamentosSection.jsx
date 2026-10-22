import { useState } from 'react';
import AppHeader from '../../components/layout/AppHeader';
import { useAuth } from '../../context/AuthContext';
import { useMedicamentos } from '../../hooks/useMedicamentos';
import MedicamentoTable from './MedicamentoTable';
import MedicamentoFormModal from './MedicamentoFormModal';
import StockModal from './StockModal';
import DetalleModal from './DetalleModal';

export default function MedicamentosSection() {
  const { isFarmaceutico } = useAuth();
  const { medicamentos, loading, error, save, addStock, remove } = useMedicamentos();
  const [query, setQuery] = useState('');
  const [dialog, setDialog] = useState(null); // { type: 'form' | 'stock' | 'detalle', med? }
  const [actionError, setActionError] = useState('');
  const close = () => setDialog(null);

  const q = query.trim().toLowerCase();
  const visibles = medicamentos.filter((m) => `${m.nombre} ${m.principioActivo}`.toLowerCase().includes(q));

  async function onDelete(m) {
    if (!window.confirm(`¿Eliminar "${m.nombre}"?`)) return;
    try { setActionError(''); await remove(m.id); }
    catch (e) { setActionError(`No se pudo eliminar: ${e.message}`); }
  }

  return (
    <section aria-labelledby="titulo-meds">
      <AppHeader>
        {isFarmaceutico && <button type="button" className="btn btn-success mr-2" onClick={() => setDialog({ type: 'form' })}>+ Añadir medicamento</button>}
      </AppHeader>
      <label htmlFor="buscar" className="sr-only">Buscar medicamentos</label>
      <input id="buscar" type="search" className="form-control mb-3" placeholder="Buscar por nombre o principio activo…" value={query} onChange={(e) => setQuery(e.target.value)} />
      {actionError && <div className="alert alert-danger" role="alert">{actionError}</div>}
      <MedicamentoTable medicamentos={visibles} loading={loading} error={error} canEdit={isFarmaceutico}
        onView={(med) => setDialog({ type: 'detalle', med })} onStock={(med) => setDialog({ type: 'stock', med })}
        onEdit={(med) => setDialog({ type: 'form', med })} onDelete={onDelete} />

      {dialog?.type === 'form' && <MedicamentoFormModal medicamento={dialog.med} onSave={save} onClose={close} />}
      {dialog?.type === 'stock' && <StockModal medicamento={dialog.med} onAddStock={addStock} onClose={close} />}
      {dialog?.type === 'detalle' && <DetalleModal medicamento={dialog.med} onClose={close} />}
    </section>
  );
}
