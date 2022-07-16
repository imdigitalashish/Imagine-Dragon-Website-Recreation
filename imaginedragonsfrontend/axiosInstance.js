import axios from 'axios';

export const larabackInstance = axios.create({
    baseURL: 'http://localhost:8000/api'
})