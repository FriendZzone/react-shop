import { axiosClient } from './axiosClient';

export const productApi = {
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getAll() {
    const url = `/products/`;
    return axiosClient.get(url);
  },
};
