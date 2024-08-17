import axios from "axios";

const baseURL=import.meta.env.VITE_API;
function getExperience() {
  return axios.get(baseURL+'/api/Experience');
}
export { getExperience };