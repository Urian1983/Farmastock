import { useResource } from './useResource';
import { createMedicamento, deleteMedicamento, listMedicamentos, updateMedicamento } from '../services/medicamentoService';

export function useMedicamentos() {
  const { data, loading, error, reload } = useResource(listMedicamentos);
  const thenReload = (action) => async (...args) => { await action(...args); await reload(); };

  return {
    medicamentos: data, loading, error,
    save: thenReload((m) => (m.id != null ? updateMedicamento(m) : createMedicamento(m))),
    addStock: thenReload((m, unidades) => updateMedicamento({ ...m, cantidad: m.cantidad + unidades })),
    remove: thenReload(deleteMedicamento),
  };
}
