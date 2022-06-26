import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/';

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: 'special-key',
  },
});

export const get = async (url: string) => {
  const response = await api.get(baseUrl + url);
  return response.data;
};

export const post = async (url: string, data: unknown) => {
  const response = await api.post(baseUrl + url, data);
  return response.data;
};

export const deleteItem = async (url: string) => {
  const response = await api.delete(baseUrl + url);
  return response.data;
};
