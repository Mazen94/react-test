import axios from 'axios';

const baseUrl = 'https://petstore.swagger.io/v2/';

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = <T>(url: string) => api.get<T>(url);

export const post = async (url: string, data: unknown) => {
  const response = await api.post(baseUrl + url, data);
  return response.data;
};

export const deleteItem = async (url: string) => {
  const response = await api.delete(baseUrl + url);
  return response.data;
};
