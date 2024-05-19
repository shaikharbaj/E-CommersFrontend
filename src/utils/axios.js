import axios from 'axios'
import server from '../server';
const api = axios.create({
    baseURL: server,
    withCredentials: true, // Important if you are dealing with cookies
  });


  export default api;