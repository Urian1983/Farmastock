import { useState } from 'react';
import Modal from '../../components/ui/Modal';
import Field from '../../components/ui/Field';
import { STOCK_POR_DEFECTO } from '../../config/constants';

export default function StockModal({ medicamento, onAddStock, onClose }) {
  const [unidades, setUnidades] = useState(String(STOCK_POR_DEFECTO));
  const [error, setError] = useState('');
  const n = Number(unidades);

  async function onSubmit(e) {
    e.preventDefault();
    if (!Number.isInteger(n) || n <= 0) return setError('Indique un número entero mayor que 0.');
    try { await onAddStock(medicamento, n); onClose(); }
    catch (err) { setError(`No se pudo actualizar el stock: ${err.message}`); }
  }

  return (
    <Modal title="Añadir stock" size="modal-sm" onClose={onClose}
      footer={<button type="submit" form="form-stock" className="btn btn-success">Añadir</button>}>
      <form id="form-stock" onSubmit={onSubmit} noValidate>
        <p className="font-weight-bold">{medicamento.nombre}</p>
        <Field label="Unidades a añadir" type="number" min="1" step="1" value={unidades} onChange={(e) => setUnidades(e.target.value)} error={error} />
      </form>
    </Modal>
  );
}
