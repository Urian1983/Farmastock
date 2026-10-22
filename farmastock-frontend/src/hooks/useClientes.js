import { useResource } from './useResource';
import { listClientes } from '../services/clienteService';

export const useClientes = (enabled) => useResource(listClientes, enabled);
