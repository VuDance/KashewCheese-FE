import axios from 'axios';
import { API_URLS } from '../contants/api-url';
import { urls } from '../contants/urls';
import { STORAGE_KEYS } from '../contants/storage-keys';


const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PIBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "*/*",
  },
  timeout: Number(process.env.NEXT_PUBLIC_TIME_OUT) || 5000,
  validateStatus: function (status: number) {
    return status >= 200 && status < 300;
  },
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    const statusCode = error.status;
    const apiUrl = error.config.url;
    const excludeAPI = [API_URLS.LOGIN];
    if (statusCode === 401 && !excludeAPI.includes(apiUrl)) {
      alert("Phiên đăng nhập của bạn đã hết hạn. Vui lòng đăng nhập lại.");
      sessionStorage.clear();
      window.location.href = urls.dashboard;
    }
    return Promise.reject(error.response);
  }
);

if (globalThis.sessionStorage) {
  console.log("globalThis.sessionStorage", globalThis.sessionStorage);
  const token = globalThis.sessionStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}

export default axiosInstance;