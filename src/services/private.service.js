import axios from "axios";
import { BASE_URL_PRIVATE_API, PrivateEndpoints } from "../models/RoutesAPI";

const controller = new AbortController;

export const RecoveryPasswordAPI = (BodyRequest) => {
  return axios.post(`${BASE_URL_PRIVATE_API}/${PrivateEndpoints.RECOVERYACCOUNT}`, BodyRequest, {signal: controller.signal});
}