import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchInidividuals = async () => {
  const response = await axios.get('/individuals', { baseURL });
  return response.data;
};
