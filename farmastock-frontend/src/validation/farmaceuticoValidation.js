export const FARMACEUTICO_VACIO = { nombreUsuario: '', email: '' };

export function validateFarmaceutico(v) {
  const errors = {};
  if (!v.nombreUsuario.trim()) errors.nombreUsuario = 'El nombre de usuario es obligatorio.';
  else if (v.nombreUsuario.length > 50) errors.nombreUsuario = 'Máximo 50 caracteres.';
  if (!v.email.trim()) errors.email = 'El email es obligatorio.';
  else if (v.email.length > 100) errors.email = 'Máximo 100 caracteres.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = 'Email no válido.';
  return errors;
}

export const toFarmaceuticoPayload = (v, id) => ({
  ...(id != null && { id }),
  nombreUsuario: v.nombreUsuario.trim(),
  email: v.email.trim(),
});
