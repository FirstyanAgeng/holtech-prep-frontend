import axios from "axios";

const base =
  (import.meta.env.VITE_API_BASE as string) || "http://localhost:3000";

export const api = axios.create({
  baseURL: base,
  headers: { "Content-Type": "application/json" },
});

export default api;
