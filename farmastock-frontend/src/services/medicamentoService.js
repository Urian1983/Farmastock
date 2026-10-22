import { ApiError, request } from './httpClient';

const URL = '/api/medicamentos';

export async function listMedicamentos() {
  try { return await request('GET', URL); }
  catch (e) { if (e instanceof ApiError && e.status === 404) return []; throw e; } // el backend responde 404 si no hay ninguno
}
export const createMedicamento = (m) => request('POST', URL, m);
export const updateMedicamento = (m) => request('PUT', URL, m);
export const deleteMedicamento = (id) => request('DELETE', `${URL}/${id}`);
