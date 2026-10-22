export class ApiError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

const MENSAJES = {
  401: 'Usuario o clave incorrectos.',
  403: 'No tienes permisos para esta operación.',
  404: 'Recurso no encontrado.',
  409: 'Conflicto: ya existe un registro con esos datos.',
};

// Las credenciales viven solo en memoria (no en localStorage): al recargar se cierra la sesión.
let authHeader = null;
export const setCredentials = (user, pass) => {
  authHeader = user == null ? null : 'Basic ' + btoa(unescape(encodeURIComponent(`${user}:${pass}`)));
};

export async function request(method, url, body) {
  const headers = { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' };
  if (authHeader) headers.Authorization = authHeader;
  if (body) headers['Content-Type'] = 'application/json';

  let res;
  try {
    // credentials:'omit' + X-Requested-With evitan el diálogo nativo de Basic Auth del navegador.
    res = await fetch(url, { method, headers, credentials: 'omit', body: body ? JSON.stringify(body) : undefined });
  } catch {
    throw new ApiError(0, 'No se puede conectar con el servidor.');
  }
  if (!res.ok) throw new ApiError(res.status, MENSAJES[res.status] ?? `Error del servidor (HTTP ${res.status}).`);
  const text = await res.text();
  if (!text) return null;
  try { return JSON.parse(text); } catch { return text; } // algunos endpoints (DELETE farmacéuticos) devuelven texto plano
}
