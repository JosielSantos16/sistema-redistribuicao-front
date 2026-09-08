const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3001"; // mesma base usada em services/api.js

export function resolverFotoUrl(foto_url) {
  if (!foto_url) return null;
  if (foto_url.startsWith("http")) return foto_url;
  return `${API_BASE_URL}${foto_url}`;
}