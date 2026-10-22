import { useState } from 'react';
import DataTable from '../../components/ui/DataTable';
import { useFarmaceuticos } from '../../hooks/useFarmaceuticos';
import FarmaceuticoFormModal from './FarmaceuticoFormModal';

export default function FarmaceuticosSection() {
  const { farmaceuticos, loading, error, save, remove } = useFarmaceuticos();
  const [dialog, setDialog] = useState(null); // { farmaceutico? }
  const [actionError, setActionError] = useState('');

  async function onDelete(f) {
    if (!window.confirm(`¿Eliminar a "${f.nombreUsuario}"?`)) return;
    try { setActionError(''); await remove(f.id); }
    catch (e) { setActionError(`No se pudo eliminar: ${e.message}`); }
  }

  const columns = [
    { key: 'id', header: 'Id', render: (f) => f.id },
    { key: 'usuario', header: 'Usuario', render: (f) => f.nombreUsuario },
    { key: 'email', header: 'Email', render: (f) => f.email },
    {
      key: 'acciones', srHeader: 'Acciones', className: 'text-right text-nowrap',
      render: (f) => (
        <>
          <button type="button" className="btn btn-sm btn-outline-secondary mr-1" onClick={() => setDialog({ farmaceutico: f })}>Editar</button>
          <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => onDelete(f)}>Eliminar</button>
        </>
      ),
    },
  ];

  return (
    <section aria-labelledby="titulo-farmaceuticos">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2 id="titulo-farmaceuticos" className="h5 font-weight-bold mb-0">Farmacéuticos</h2>
        <button type="button" className="btn btn-success btn-sm" onClick={() => setDialog({})}>+ Añadir farmacéutico</button>
      </div>
      {actionError && <div className="alert alert-danger" role="alert">{actionError}</div>}
      <DataTable caption="Listado de farmacéuticos" columns={columns} rows={farmaceuticos} rowKey={(f) => f.id} loading={loading}
                 error={error && `No se pudieron cargar los farmacéuticos: ${error}`} emptyText="No hay farmacéuticos." />
      {dialog && <FarmaceuticoFormModal farmaceutico={dialog.farmaceutico} onSave={save} onClose={() => setDialog(null)} />}
    </section>
  );
}
