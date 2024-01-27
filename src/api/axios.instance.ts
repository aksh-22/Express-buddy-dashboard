import axios from "axios";
import { axiosError } from "./axios.error";
import { store } from "src/store/store";

const axiosInstance = axios.create({
  baseURL: "http://192.168.1.109:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(function (config) {
  const reduxStore: any = store.getState();
  const token = reduxStore?.userReducer?.token;

  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (res) => {
    if ([200, 201].includes(res.status)) {
      return res;
    } else {
      throw Error;
    }
  },
  (err) => axiosError(err)
);

export { axiosInstance };
