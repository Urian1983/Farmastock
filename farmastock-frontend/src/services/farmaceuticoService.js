import { request } from './httpClient';

const URL = '/api/farmaceuticos';

export const listFarmaceuticos = () => request('GET', URL);
export const createFarmaceutico = (f) => request('POST', URL, f);
export const updateFarmaceutico = (f) => request('PUT', URL, f);
export const deleteFarmaceutico = (id) => request('DELETE', `${URL}/${id}`);
