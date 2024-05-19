import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_SOCKET_SERVER_URL}/api`,
  timeout: 5000,
});
