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




export const loginUser = (params = {}) => {
  return instance.post("/user/login", params);
};
export const createUser = (params = {}) => {
  return instance.post("/user/create-user", params);
};
export const updateUser = (params = {}) => {
  return instance.patch("/user/update-user", params);
};
export const deleteUser = (id) => {
  return instance.delete(`/user/delete-user/${id}`);
};
export const getUsers = (params) =>
  instance.get(`/user/users`, { params });

export const uploadFile = (payload, headers) =>
instance.post(`/media/image-upload`, payload, headers);
