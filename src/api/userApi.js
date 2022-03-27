import { axiosClient } from './axiosClient';

export const userApi = {
  getUser: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
};
