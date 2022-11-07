import apiInstance from "../../shared/interceptors/axios.interceptor";
import routesApi from "../../shared/routes/routesApi.routes";
import { IEmployee } from "../models/IEmployee";

export const getAllEmploye = async () => {
  try {
    const { status, data } = await apiInstance.get(`${routesApi.employe}`);
    if (status === 200) return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getIdEmploye = async (id: string) => {
  try {
    const { status, data } = await apiInstance.get(`${routesApi.employe}${id}`);
    if (status === 200) return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const postEmployee = async (form: IEmployee) => {
  try {
    const { status, data } = await apiInstance.post(
      `${routesApi.employe}`,
      form
    );
    if (status === 200) return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const putEmployee = async (form: IEmployee, id: string) => {
  try {
    const { status, data } = await apiInstance.put(
      `${routesApi.employe}${id}`,
      form
    );
    if (status === 200) return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteEmploye = async (id: string) => {
  try {
    const { status, data } = await apiInstance.delete(
      `${routesApi.employe}${id}`
    );
    if (status === 200) return data;
  } catch (err) {
    console.log(err);
  }
};
