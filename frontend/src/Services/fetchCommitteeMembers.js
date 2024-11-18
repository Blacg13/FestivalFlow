import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchCommitteeMembers = async () => {
  const response = await axios.get('/committeeMembers', { baseURL });
  return response.data;
};
