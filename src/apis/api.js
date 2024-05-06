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

export const getHsaAdministrators = (params) =>
  instance.get(`/brand/hsa-administrators`, { params });
export const getCategories = (params) =>
  instance.get(`/brand/categories`, { params });
export const getSubCategories = (params) =>
  instance.get(`/brand/sub-categories`, { params });
export const getBrands = (params) =>
  instance.get(`/brand/products`, { params });

export const getHealthConditions = (params) =>
  instance.get(`/brand/health-conditions`, { params });

export const createHsaAdministrator = (params = {}) => {
  return instance.post("/brand/create-hsa-administrator", params);
};
export const updateHsaAdministrator = (params = {}) => {
  return instance.patch("/brand/update-hsa-administrator", params);
};
export const deleteHsaAdministrator = (id) => {
  return instance.delete(`/brand/delete-hsa-administrator/${id}`);
};
export const createHealthCondition = (params = {}) => {
  return instance.post("/brand/create-health-condition", params);
};
export const updateHealthCondition = (params = {}) => {
  return instance.patch("/brand/update-health-condition", params);
};
export const deleteHealthCondition = (id) => {
  return instance.patch(`/brand/delete-health-condition/${id}`);
};

export const createCategory = (params = {}) => {
  return instance.post("/brand/create-category", params);
};
export const updateCategory = (params = {}) => {
  return instance.patch("/brand/update-category", params);
};
export const deleteCategory = (id) => {
  return instance.delete(`/brand/delete-category/${id}`);
};

export const createSubCategory = (params = {}) => {
  return instance.post("/brand/create-sub-category", params);
};
export const updateSubCategory = (params = {}) => {
  return instance.patch("/brand/update-sub-category", params);
};
export const deleteSubCategory = (id) => {
  return instance.delete(`/brand/delete-sub-category/${id}`);
};

export const createBrand = (params = {}) => {
  return instance.post("/brand/create-brand", params);
};
export const updateBrand = (params = {}) => {
  return instance.patch("/brand/update-brand", params);
};
export const updateBrandStatus = (params = {}) => {
  return instance.patch("/brand/update-brand-status", params);
};

export const updateCustomBrandStatus = (params = {}) => {
  return instance.patch("/brand/update-custom-brand-status", params);
};

export const deleteBrand = (id) => {
  return instance.delete(`/brand/delete-brand/${id}`);
};

export const fetchTreatment = (params) => {
  return instance.get(`/brand/fetch-treatment`, { params });
};

export const fetchEligibility = (params) => {
  return instance.get(`/brand/fetch-eligibility`, { params });
};

export const updateTreatment = (payload) => {
  return instance.patch(`/brand/update-treatment`, payload);
};

export const createBulkTreatment = (payload) => {
  return instance.post(`/brand/create-bulk-treatments`, payload);
};

export const updateEligibility = (payload) => {
  return instance.patch(`/brand/update-eligibility`, payload);
};

export const uploadFile = (payload, headers) =>
  instance.post(`/media/image-upload`, payload, headers);

export const fetchSummary = () => {
  return instance.get(`/brand/summary`);
};

export const fetchCustomBrands = () => instance.get(`/brand/get-custom-brands`);

export const createCustomTreatment = (payload) => {
  return instance.post(`/brand/create-custom-treatment`, payload);
};
