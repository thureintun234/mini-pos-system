import axios from 'axios';
const baseUrl = 'https://mini-pos-system.onrender.com/api/users/login';

export const login = async (credential) => {
  try {
    const response = await axios.post(baseUrl, credential);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
