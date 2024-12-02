import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchExhibitors = async () => {
  const response = await axios.get('/exhibitors', { baseURL });
  return response.data;
};

export const fetchThisExhibitor = async (id) => {
  const response = await axios.get(`/${id}`, { baseURL });
  return response.data;
};
