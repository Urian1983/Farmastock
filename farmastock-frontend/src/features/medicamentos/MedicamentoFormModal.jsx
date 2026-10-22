import { useState } from 'react';
import Modal from '../../components/ui/Modal';
import Field from '../../components/ui/Field';
import { FORMATOS } from '../../config/constants';
import { MEDICAMENTO_VACIO, toFormValues, toPayload, validateMedicamento } from '../../validation/medicamentoValidation';

const FORM_ID = 'form-medicamento';

export default function MedicamentoFormModal({ medicamento, onSave, onClose }) {
  const [values, setValues] = useState(medicamento ? toFormValues(medicamento) : MEDICAMENTO_VACIO);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const found = validateMedicamento(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    try { await onSave(toPayload(values, medicamento?.id)); onClose(); }
    catch (err) { setSubmitError(`No se pudo guardar: ${err.message}`); }
  }

  return (
    <Modal title={medicamento ? 'Editar medicamento' : 'Nuevo medicamento'} size="modal-lg" onClose={onClose}
      footer={<>
        <button type="submit" form={FORM_ID} className="btn btn-success">Guardar</button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
      </>}>
      <form id={FORM_ID} onSubmit={onSubmit} noValidate>
        <div className="form-row">
          <Field className="col-12" label="Nombre" required value={values.nombre} onChange={set('nombre')} error={errors.nombre} maxLength={255} />
          <Field className="col-md-6" label="Principio activo" required value={values.principioActivo} onChange={set('principioActivo')} error={errors.principioActivo} maxLength={255} />
          <Field className="col-md-6" label="Formato" as="select" value={values.formatoMedicamento} onChange={set('formatoMedicamento')} error={errors.formatoMedicamento}>
            <option value="">— Sin especificar —</option>
            {FORMATOS.map((f) => <option key={f} value={f}>{f}</option>)}
          </Field>
          <Field className="col-md-6" label="Cantidad (stock)" required type="number" min="0" step="1" inputMode="numeric" value={values.cantidad} onChange={set('cantidad')} error={errors.cantidad} />
          <Field className="col-md-6" label="Precio (€)" type="number" min="0" step="0.01" inputMode="decimal" value={values.precio} onChange={set('precio')} error={errors.precio} />
        </div>
        {submitError && <div className="alert alert-danger mb-0" role="alert">{submitError}</div>}
      </form>
    </Modal>
  );
}
