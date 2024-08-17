import axios from "axios";

const baseURL=import.meta.env.VITE_API;
function getPrujects({pageSize, pageNumber}: {pageSize: number, pageNumber: number}) {
  return axios.get(baseURL+'/api/Proyect',{
    params: {
      pageSize: pageSize,
      pageNumber: pageNumber
    }
  });
}
export { getPrujects };