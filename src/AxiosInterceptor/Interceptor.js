import axios from "axios";
import { SnackbarUtilities } from "../utilities/SnackbarManager";
import { LSKeys } from './../models/LocalStorageKeys';

export const AxiosInterceptor = () => {
  const updateHeaders = (request) => {
    const newHeader = {
      Authorization: `Bearer ${"token"}`
    }
    request.headers = newHeader;
    return request;
  }

  axios.interceptors.request.use(request => {
    console.log(request);
    return request;
  })

  axios.interceptors.response.use(response => {
    //console.log(response?.data?.message);
    console.log("Request Success");
    SnackbarUtilities.success(response?.data?.message);
    return response;
  }, (error) => {
    console.log(error);
    SnackbarUtilities.error(error?.response?.data?.message);
    console.log("Request Failed");
    return Promise.reject(error);
  })
}