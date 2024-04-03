// api.js
import axios from "axios";
import * as constant from "../utils/Constants";

const instance = axios.create({
  baseURL: constant.API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      localStorage.clear();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

//  user waitlist
export const createWaitlist = (payload) =>
  instance.post(`/user/create-waitlist`, payload);
