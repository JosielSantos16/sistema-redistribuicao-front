import { createContext, useContext, useState, useCallback } from "react";

const PerfilContext = createContext(null);
const CACHE_KEY = "@Wolf:perfilCache";

function lerCache() {
  try {
    const bruto = localStorage.getItem(CACHE_KEY);
    return bruto ? JSON.parse(bruto) : {};
  } catch {
    return {};
  }
}

export function PerfilProvider({ children }) {
  const cache = lerCache();
  const [nome, setNome] = useState(cache.nome || "Usuário");
  const [fotoUrl, setFotoUrl] = useState(cache.fotoUrl || null);

  const atualizarPerfil = useCallback((novosDados) => {
    setNome((nomeAtual) => {
      const nomeFinal = novosDados.nome !== undefined ? novosDados.nome : nomeAtual;

      setFotoUrl((fotoAtual) => {
        const fotoFinal = novosDados.fotoUrl !== undefined ? novosDados.fotoUrl : fotoAtual;
        localStorage.setItem(CACHE_KEY, JSON.stringify({ nome: nomeFinal, fotoUrl: fotoFinal }));
        return fotoFinal;
      });

      return nomeFinal;
    });
  }, []);

  return (
    <PerfilContext.Provider value={{ nome, fotoUrl, atualizarPerfil }}>
      {children}
    </PerfilContext.Provider>
  );
}

export function usePerfil() {
  const ctx = useContext(PerfilContext);
  if (!ctx) {
    throw new Error("usePerfil precisa ser usado dentro de um <PerfilProvider>");
  }
  return ctx;
}