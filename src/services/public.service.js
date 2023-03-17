
import axios from "axios";

const controller = new AbortController;

export const GetCommentsAPI = () => {
  return { CallEndpoint: axios.get('https://statcj-api-rest.vercel.app/api/getcomments', { signal: controller.signal }), controller };
}

export const LoginAPI = (BodyRequest) => {
  return axios.post('https://statcj-api-rest.vercel.app/api/login', BodyRequest);
}