import DataTable from '../../components/ui/DataTable';
import { useClientes } from '../../hooks/useClientes';

const columns = [
  { key: 'id', header: 'Id', render: (c) => c.id },
  { key: 'usuario', header: 'Usuario', render: (c) => c.nombreUsuario },
  { key: 'email', header: 'Email', render: (c) => c.email },
];

export default function ClientesSection() {
  const { data, loading, error } = useClientes(true);
  return (
    <section aria-labelledby="titulo-clientes">
      <h2 id="titulo-clientes" className="h5 font-weight-bold">Clientes</h2>
      <DataTable caption="Listado de clientes" columns={columns} rows={data} rowKey={(c) => c.id} loading={loading}
                 error={error && `No se pudieron cargar los clientes: ${error}`} emptyText="No hay clientes." />
    </section>
  );
}
