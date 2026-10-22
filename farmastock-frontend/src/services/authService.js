import { ApiError, request, setCredentials } from './httpClient';
import { ROLES } from '../config/constants';

/* El backend no tiene /login ni /me: se valida con HTTP Basic y el rol se deduce de SecurityConfig
   (GET /api/clients solo lo permite FARMACEUTICO; GET /api/medicamentos, FARMACEUTICO y CLIENTE). */
export async function login(username, password) {
  setCredentials(username, password);
  try {
    try {
      await request('GET', '/api/clients');
      return { username, role: ROLES.FARMACEUTICO };
    } catch (e) {
      if (!(e instanceof ApiError) || e.status !== 403) throw e;
    }
    try { await request('GET', '/api/medicamentos'); }
    catch (e) { if (!(e instanceof ApiError) || e.status !== 404) throw e; } // 404 = lista vacía, credenciales válidas
    return { username, role: ROLES.CLIENTE };
  } catch (e) {
    setCredentials(null);
    throw e;
  }
}

export const logout = () => setCredentials(null);
