import { useCallback, useEffect, useState } from 'react';

/** Carga una colección y expone loading / error / reload. `fetcher` debe ser una referencia estable. */
export function useResource(fetcher, enabled = true) {
  const [state, setState] = useState({ data: [], loading: enabled, error: '' });

  const reload = useCallback(async () => {
    setState((s) => ({ ...s, loading: true, error: '' }));
    try { setState({ data: (await fetcher()) ?? [], loading: false, error: '' }); }
    catch (e) { setState({ data: [], loading: false, error: e.message }); }
  }, [fetcher]);

  useEffect(() => { if (enabled) reload(); }, [enabled, reload]);
  return { ...state, reload };
}
