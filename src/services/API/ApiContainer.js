import axios from 'axios';

//Base URL API
const BASE_URL = 'https://api.github.com/'

//Endpoint
// export const SIGNIN = 'auth/login'

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  }
});

export default API