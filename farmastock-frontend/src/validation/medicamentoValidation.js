import { FORMATOS } from '../config/constants';

export const MEDICAMENTO_VACIO = { nombre: '', principioActivo: '', formatoMedicamento: '', cantidad: '0', precio: '' };

export const toFormValues = (m) => ({
  nombre: m.nombre ?? '', principioActivo: m.principioActivo ?? '', formatoMedicamento: m.formatoMedicamento ?? '',
  cantidad: String(m.cantidad ?? 0), precio: m.precio == null ? '' : String(m.precio),
});

export function validateMedicamento(v) {
  const errors = {};
  if (!v.nombre.trim()) errors.nombre = 'El nombre es obligatorio.';
  else if (v.nombre.length > 255) errors.nombre = 'Máximo 255 caracteres.';
  if (!v.principioActivo.trim()) errors.principioActivo = 'El principio activo es obligatorio.';
  else if (v.principioActivo.length > 255) errors.principioActivo = 'Máximo 255 caracteres.';
  if (v.formatoMedicamento && !FORMATOS.includes(v.formatoMedicamento)) errors.formatoMedicamento = 'Formato no válido.';
  if (v.cantidad === '' || !Number.isInteger(Number(v.cantidad)) || Number(v.cantidad) < 0) errors.cantidad = 'Indica un número entero igual o mayor que 0.';
  if (v.precio !== '' && !(Number(v.precio) >= 0)) errors.precio = 'Indica un precio válido (0 o mayor).';
  return errors;
}

export const toPayload = (v, id) => ({
  ...(id != null && { id }),
  nombre: v.nombre.trim(),
  principioActivo: v.principioActivo.trim(),
  formatoMedicamento: v.formatoMedicamento || null,
  cantidad: Number(v.cantidad),
  precio: v.precio === '' ? null : Number(v.precio),
});
