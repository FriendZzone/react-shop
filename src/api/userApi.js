import { axiosClient } from './axiosClient';

export const userApi = {
  getUser: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  addUser: (info) => {
    const url = `/users`;
    return axiosClient.post(url, info);
  },
  login: (info) => {
    const url = 'auth/login';
    const fakeData = {
      username: 'mor_2314',
      password: '83r5^_',
    };
    return axiosClient.push(url, fakeData);
  },
};
