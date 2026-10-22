import { useState } from 'react';
import Modal from '../../components/ui/Modal';
import Field from '../../components/ui/Field';
import { FARMACEUTICO_VACIO, toFarmaceuticoPayload, validateFarmaceutico } from '../../validation/farmaceuticoValidation';

const FORM_ID = 'form-farmaceutico';

export default function FarmaceuticoFormModal({ farmaceutico, onSave, onClose }) {
  const [values, setValues] = useState(farmaceutico
    ? { nombreUsuario: farmaceutico.nombreUsuario ?? '', email: farmaceutico.email ?? '' } : FARMACEUTICO_VACIO);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    const found = validateFarmaceutico(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    try { await onSave(toFarmaceuticoPayload(values, farmaceutico?.id)); onClose(); }
    catch (err) { setSubmitError(`No se pudo guardar: ${err.message}`); }
  }

  return (
    <Modal title={farmaceutico ? 'Editar farmacéutico' : 'Nuevo farmacéutico'} onClose={onClose}
      footer={<>
        <button type="submit" form={FORM_ID} className="btn btn-success">Guardar</button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
      </>}>
      <form id={FORM_ID} onSubmit={onSubmit} noValidate>
        <Field label="Nombre de usuario" required value={values.nombreUsuario} onChange={set('nombreUsuario')} error={errors.nombreUsuario} maxLength={50} autoComplete="off" />
        <Field label="Email" required type="email" value={values.email} onChange={set('email')} error={errors.email} maxLength={100} autoComplete="off" />
        {submitError && <div className="alert alert-danger mb-0" role="alert">{submitError}</div>}
      </form>
    </Modal>
  );
}
