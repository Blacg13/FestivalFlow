import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchIndividuals = async () => {
  const response = await axios.get('/individuals', { baseURL });
  return response.data;
};
