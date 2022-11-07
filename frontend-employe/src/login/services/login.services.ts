import apiInstance from "../../shared/interceptors/axios.interceptor";
import routesApi from "../../shared/routes/routesApi.routes";
import { ILogin } from "../models/ILogin";

const setToken = (token: string) => {
  localStorage.setItem("tokenUser", token);
};

export const getToken = () => {
  return localStorage.getItem("tokenUser");
};

export const removeToken = () => {
  localStorage.removeItem("tokenUser");
};
export const postLogin = async (form: ILogin) => {
  try {
    const resp = await apiInstance.post(routesApi.login, form);
    if (resp.status === 200) setToken(resp?.data?.data);
    return resp;
  } catch (err) {
    console.log(err);
  }
};
