import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust based on your backend URL
});

export const loginUser = async (data) => {
  const response = await api.post('/login', data);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await api.post('/register', data);
  return response.data;
};
