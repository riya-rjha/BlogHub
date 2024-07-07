import axios from 'axios';
import { baseURL } from "../Components/ServerURL";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: baseURL,
});

// Add a request interceptor to include the token in the headers
axiosInstance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
