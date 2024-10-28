import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  },
})

export default api