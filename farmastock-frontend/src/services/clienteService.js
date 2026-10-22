import { request } from './httpClient';

export const listClientes = () => request('GET', '/api/clients');
