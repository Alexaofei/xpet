import axios from 'axios';

const http = axios.create({
  baseURL: '/api',
});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use((res) => {
  return res;
});

export default http;
