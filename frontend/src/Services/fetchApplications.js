import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchApplications = async () => {
  const response = await axios.get('/applications', { baseURL });
  return response.data;
};
