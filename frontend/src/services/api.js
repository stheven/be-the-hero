import axios from "axios";
import { SESSION_NAME_LS } from "../constants";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

api.interceptors.request.use(
  config => {
    const ongDataStr = localStorage.getItem(SESSION_NAME_LS);
    if (ongDataStr) {
      const ongData = JSON.parse(ongDataStr);
      config.headers.authorization = ongData.id;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default api;
