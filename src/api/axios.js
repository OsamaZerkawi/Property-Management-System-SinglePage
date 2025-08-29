// src/api/axios.js
import axios from "axios";

const api = axios.create({
  //   baseURL: import.meta.env.VITE_API_BASE_URL, // from .env
  headers: {
    "Content-Type": "application/json",
  },
});

// You can also add interceptors here (for auth tokens, errors, etc.)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
