import { render } from "@testing-library/react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ToastErrors } from "../errors/errorsServer";
import routesApi from "../routes/routesApi.routes";

const token = localStorage.getItem('tokenUser');

const apiInstance = axios.create({ baseURL: routesApi.api });

apiInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {
      "Content-Type": "application/json;charset=utf-8",
      "x-access-token": token ? token : "",
    };
    return config;
  },
  (err: Error) => {
    console.log(err);
  }
);

apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (err) => {
    render(<ToastErrors errors={err.response.data.errors} />);
  }
);

export default apiInstance;
