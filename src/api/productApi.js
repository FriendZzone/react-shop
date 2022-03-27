import { axiosClient } from './axiosClient';

export const productApi = {
  getProduct(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getAllProducts() {
    const url = `/products/`;
    return axiosClient.get(url);
  },
  getCategoriesNames() {
    const url = `/products/categories`;
    return axiosClient.get(url);
  },
  getByCategory(category) {
    const url = `/products/category/${category}`;
    return axiosClient.get(url);
  },
};
