import axios from "axios";
import { BASE_URL_PUBLIC_API, PublicEndpoints } from "../models/RoutesAPI";

const controller = new AbortController;

export const GetCommentsAPI = () => {
  return { CallEndpoint: axios.get(`${BASE_URL_PUBLIC_API}/${PublicEndpoints.GETCOMMENTS}`, { signal: controller.signal }), controller };
}

export const LoginAPI = (BodyRequest) => {
  return axios.post(`${BASE_URL_PUBLIC_API}/${PublicEndpoints.LOGIN}`, BodyRequest, { signal: controller.signal });
}

export const RegisterAPI = (BodyRequest) => {
  return axios.post(`${BASE_URL_PUBLIC_API}/${PublicEndpoints.REGISTER}`, BodyRequest, { signal: controller.signal })
}

export const FindEmailAPI = (BodyRequest) => {
  return axios.post(`${BASE_URL_PUBLIC_API}/${PublicEndpoints.RECOVERYEMAIL}`, BodyRequest, {signal: controller.signal});
}