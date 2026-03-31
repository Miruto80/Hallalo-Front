import axios from 'axios';

// Configura tu baseURL según tu backend.
// Por ejemplo: http://localhost:3000 o https://api.tusitio.com
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptores (opcional): token, logs, etc.
apiClient.interceptors.request.use(
  config => {
    // Ejemplo: agregar token
    // const token = await getToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

apiClient.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default apiClient;
