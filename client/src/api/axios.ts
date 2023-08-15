import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:3000/api/v1";
// const BASE_URL = "https://fire-extinguisher2.onrender.com/api/v1";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const axiosPrivateInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default axiosInstance;
export { axiosPrivateInstance };
