import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.eu/rest/v3.1'
});

export default api;