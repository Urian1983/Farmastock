import Modal from '../../components/ui/Modal';

export default function DetalleModal({ medicamento: m, onClose }) {
  const filas = [
    ['Principio activo', m.principioActivo], ['Formato', m.formatoMedicamento],
    ['Cantidad (stock)', m.cantidad], ['Precio', m.precio != null ? `${Number(m.precio).toFixed(2)} €` : null],
  ];
  return (
    <Modal title={m.nombre} size="modal-lg" onClose={onClose}>
      <dl className="detalle mb-0">
        {filas.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v ?? '—'}</dd></div>)}
      </dl>
    </Modal>
  );
}
