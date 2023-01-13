import axios from 'axios';
const baseUrl = 'https://mini-pos-system.onrender.com/api/products';

let token = null;
export const URL = {
  BASE_URL: '/products',
};

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const getAll = (query) => {
  const config = { headers: { Authorization: token } };

  if (query) {
    const request = axios.get(`${baseUrl}?category=${query}`, config);
    return request.then((response) => response.data);
  }

  const request = axios.get(baseUrl, config);
  return request.then((response) => response.data);
};

export const create = async (newObject) => {
  const config = { headers: { Authorization: token } };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

export const update = async (id, newObject) => {
  const config = { headers: { Authorization: token } };

  const response = await axios.put(`${baseUrl}/${id}`, newObject, config);
  return response.data;
};

export const remove = async (id) => {
  const config = { headers: { Authorization: token } };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};
