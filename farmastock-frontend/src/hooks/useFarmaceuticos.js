import { useResource } from './useResource';
import { createFarmaceutico, deleteFarmaceutico, listFarmaceuticos, updateFarmaceutico } from '../services/farmaceuticoService';

export function useFarmaceuticos() {
  const { data, loading, error, reload } = useResource(listFarmaceuticos);
  const thenReload = (action) => async (...args) => { await action(...args); await reload(); };

  return {
    farmaceuticos: data, loading, error,
    save: thenReload((f) => (f.id != null ? updateFarmaceutico(f) : createFarmaceutico(f))),
    remove: thenReload(deleteFarmaceutico),
  };
}
