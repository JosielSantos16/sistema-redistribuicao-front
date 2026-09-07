import { createContext, useContext, useState, useCallback } from "react";
import api from "../services/api";

const SyncContext = createContext(null);

export function SyncProvider({ children }) {
  const [sincronizando, setSincronizando] = useState(false);
  const [ultimoResultado, setUltimoResultado] = useState(null);
  const [naoVisualizado, setNaoVisualizado] = useState(false);

  const iniciarSincronizacao = useCallback(async () => {
    if (sincronizando) return; 

    setSincronizando(true);
    try {
      const { data } = await api.post('/scraper/PROGEP');
      setUltimoResultado(data);
      setNaoVisualizado(true);
    } catch (err) {
      console.error('Erro ao sincronizar editais:', err);
      setUltimoResultado({ sucesso: false, erro: 'Falha na sincronização.' });
      setNaoVisualizado(true);
    } finally {
      setSincronizando(false);
    }
  }, [sincronizando]);
  
  const marcarComoVisto = useCallback(() => {
    setNaoVisualizado(false);
  }, []);

  return (
    <SyncContext.Provider
      value={{ sincronizando, ultimoResultado, naoVisualizado, iniciarSincronizacao, marcarComoVisto }}
    >
      {children}
    </SyncContext.Provider>
  );
}

export function useSync() {
  const ctx = useContext(SyncContext);
  if (!ctx) {
    throw new Error('useSync precisa ser usado dentro de um <SyncProvider>');
  }
  return ctx;
}