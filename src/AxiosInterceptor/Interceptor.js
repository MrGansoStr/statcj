import axios from "axios";
import { SnackbarUtilities } from "../utilities/SnackbarManager";
import { LSKeys } from './../models/LocalStorageKeys';
import { GetLocalStorage } from './../utilities/ManageLocalStorage';

export const AxiosInterceptor = () => {
  const updateHeaderRecovery = (request) => {
    const tokenRecovery = GetLocalStorage(LSKeys.TOKENRECOVERY);
    const newHeaderRecovery = {
      Authorization: `Bearer ${tokenRecovery}`
    }
    request.headers = newHeaderRecovery;
    return request;
  }
  const updateHeaders = (request) => {
    const tokenJWT = GetLocalStorage(LSKeys.TOKEN);
    const newHeader = {
      Authorization: `Bearer ${tokenJWT}`
    }
    request.headers = newHeader;
    return request;
  }

  axios.interceptors.request.use(request => {
    if (request?.url?.includes("/recoveryaccount")) return updateHeaderRecovery(request);
    if(request?.url?.includes("/private-api")) return updateHeaders(request);
    else if(request?.url?.includes("public-api")) return request;
  });

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