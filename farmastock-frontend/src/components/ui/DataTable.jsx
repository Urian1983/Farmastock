/** columns: [{ key, header, srHeader?, className?, render(row) }] — cabeceras con scope y sin <th> vacíos. */
export default function DataTable({ caption, columns, rows, rowKey, loading, error, emptyText }) {
  const fila = (texto, clase) => <tr><td colSpan={columns.length} className={`text-center py-3 ${clase}`}>{texto}</td></tr>;
  return (
    <div className="card shadow-sm mb-4">
      <div className="table-responsive">
        <table className="table table-hover table-sm mb-0">
          <caption className="sr-only">{caption}</caption>
          <thead className="thead-light">
            <tr>{columns.map((c) => <th key={c.key} scope="col" className={c.className}>{c.header ?? <span className="sr-only">{c.srHeader}</span>}</th>)}</tr>
          </thead>
          <tbody>
            {loading ? fila('Cargando…', 'text-muted')
              : error ? fila(error, 'text-danger')
              : rows.length === 0 ? fila(emptyText, 'text-muted')
              : rows.map((r) => <tr key={rowKey(r)}>{columns.map((c) => <td key={c.key} className={c.className}>{c.render(r)}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
