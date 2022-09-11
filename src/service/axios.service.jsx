import axios from 'axios';

const baseURL = 'https://cartestwebapp.herokuapp.com';

const service = axios.create({
  baseURL,
});

service.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
)

service.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

export { service };