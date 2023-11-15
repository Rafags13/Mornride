import axios from "axios";

const api = axios.create({
  baseURL: 'http://192.168.0.13:5118',
  responseType: 'json',
  headers: {"Content-Type": "application/json"}
})

export default api;