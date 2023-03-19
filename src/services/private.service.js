import axios from "axios";
import { BASE_URL_PRIVATE_API, PrivateEndpoints } from "../models/RoutesAPI";

const GetPrivateController = () => {
  return new AbortController;
}

export const RecoveryPasswordAPI = (BodyRequest) => {
  const controller = GetPrivateController();
  return axios.post(`${BASE_URL_PRIVATE_API}/${PrivateEndpoints.RECOVERYACCOUNT}`, BodyRequest, { signal: controller.signal });
}

export const EditCommentAPI = (BodyRequest) => {
  const controller = GetPrivateController();
  return axios.post(`${BASE_URL_PRIVATE_API}/${PrivateEndpoints.EDITCOMMENT}`, BodyRequest, { signal: controller.signal });
}

export const MakeCommentAPI = (BodyRequest) => {
  const controller = GetPrivateController();
  return axios.post(`${BASE_URL_PRIVATE_API}/${PrivateEndpoints.MAKECOMMENT}`, BodyRequest, { signal: controller.signal })
}

export const DeleteCommentAPI = (BodyRequest) => {
  const controller = GetPrivateController();
  return axios.post(`${BASE_URL_PRIVATE_API}/${PrivateEndpoints.DELETECOMMENT}`, BodyRequest, { signal: controller.signal })
}

export const AnswerCommentAPI = (BodyRequest) => {
  const controller = GetPrivateController();
  return axios.post(`${BASE_URL_PRIVATE_API}/${PrivateEndpoints.ANSWERCOMMENT}`, BodyRequest, { signal: controller.signal });
} 