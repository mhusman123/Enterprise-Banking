import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // TODO: Update with actual backend URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: Add request interceptor for auth token
// TODO: Add response interceptor for error handling

export default apiClient;
