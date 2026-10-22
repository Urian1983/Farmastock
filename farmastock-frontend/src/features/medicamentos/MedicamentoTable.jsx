import DataTable from '../../components/ui/DataTable';
import { STOCK_BAJO } from '../../config/constants';

export default function MedicamentoTable({ medicamentos, loading, error, canEdit, onView, onStock, onEdit, onDelete }) {
  const columns = [
    { key: 'nombre', header: 'Nombre', render: (m) => <button type="button" className="btn btn-link p-0 text-left" onClick={() => onView(m)}>{m.nombre}</button> },
    { key: 'principio', header: 'Principio activo', render: (m) => m.principioActivo },
    { key: 'formato', header: 'Formato', render: (m) => m.formatoMedicamento ?? '—' },
    { key: 'precio', header: 'Precio', render: (m) => (m.precio != null ? `${Number(m.precio).toFixed(2)} €` : '—') },
    { key: 'cantidad', header: 'Cantidad', className: 'text-right', render: (m) => <span className={m.cantidad < STOCK_BAJO ? 'stock-bajo' : ''}>{m.cantidad}</span> },
  ];
  if (canEdit) columns.push({
    key: 'acciones', srHeader: 'Acciones', className: 'text-right text-nowrap',
    render: (m) => (
      <>
        <button type="button" className="btn btn-sm btn-outline-primary mr-1" onClick={() => onStock(m)}>+ Stock</button>
        <button type="button" className="btn btn-sm btn-outline-secondary mr-1" onClick={() => onEdit(m)}>Editar</button>
        <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => onDelete(m)}>Eliminar</button>
      </>
    ),
  });
  return <DataTable caption="Listado de medicamentos" columns={columns} rows={medicamentos} rowKey={(m) => m.id} loading={loading}
                    error={error && `No se pudieron cargar los medicamentos: ${error}`} emptyText="No hay medicamentos que coincidan con la búsqueda." />;
}
