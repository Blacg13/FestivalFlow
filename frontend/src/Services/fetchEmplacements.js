import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;

export const fetchEmplacements = async () => {
  const response = await axios.get('/emplacements', { baseURL });
  return response.data;
};
/**
 * ? autre solution (moins lisible) :
 *  export const fetchEmplacements = () => {
 *     console.log('fetchEmplacements');
 *     *return axios.get('/emplacements', { baseURL }).then((response) => {
 *     *return response.data;
 *  });
 * };
 *
 */
