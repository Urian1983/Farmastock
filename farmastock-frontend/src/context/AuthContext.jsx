import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import * as authService from '../services/authService';
import { ROLES } from '../config/constants';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);

  const login = useCallback(async (user, pass) => setSession(await authService.login(user, pass)), []);
  const logout = useCallback(() => { authService.logout(); setSession(null); }, []);

  const value = useMemo(() => ({ session, login, logout, isFarmaceutico: session?.role === ROLES.FARMACEUTICO }), [session, login, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
};
