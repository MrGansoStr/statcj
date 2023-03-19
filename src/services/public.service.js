import axios from "axios";
import { BASE_URL_PUBLIC_API, PublicEndpoints } from "../models/RoutesAPI";


const GetController = () => {
  return new AbortController();
}

export const GetCommentsAPI = () => {
  const controller = GetController();
  return { CallEndpoint: axios.get(`${BASE_URL_PUBLIC_API}/${PublicEndpoints.GETCOMMENTS}`, { signal: controller.signal }), controller };
}

export const LoginAPI = (BodyRequest) => {
  const controller = GetController();
  return axios.post(`${BASE_URL_PUBLIC_API}/${PublicEndpoints.LOGIN}`, BodyRequest, { signal: controller.signal });
}

export const RegisterAPI = (BodyRequest) => {
  const controller = GetController();
  return axios.post(`${BASE_URL_PUBLIC_API}/${PublicEndpoints.REGISTER}`, BodyRequest, { signal: controller.signal })
}

export const FindEmailAPI = (BodyRequest) => {
  const controller = GetController();
  return axios.post(`${BASE_URL_PUBLIC_API}/${PublicEndpoints.RECOVERYEMAIL}`, BodyRequest, {signal: controller.signal});
}