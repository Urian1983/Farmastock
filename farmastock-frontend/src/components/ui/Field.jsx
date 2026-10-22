import { useId } from 'react';

/** Campo de formulario accesible: label asociado, mensaje de error enlazado con aria-describedby. */
export default function Field({ label, error, required, className = '', as: Control = 'input', children, ...props }) {
  const id = useId();
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      <Control id={id} className={`form-control ${error ? 'is-invalid' : ''}`} required={required}
               aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} {...props}>{children}</Control>
      {error && <div id={`${id}-err`} className="invalid-feedback">{error}</div>}
    </div>
  );
}
