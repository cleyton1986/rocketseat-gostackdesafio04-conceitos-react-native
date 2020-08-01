import axios from "axios";

const IP_LOCAL = "localhost";
const IP_LOCAL_WINDOWS = "10.10.1.159"; // colocar o ip do seu computador para o emulador não dar erro de network error e trocar essa variável no baseURL do axios abaixo.

const api = axios.create({
  baseURL: `http://${IP_LOCAL}:3333`,
});

export default api;
