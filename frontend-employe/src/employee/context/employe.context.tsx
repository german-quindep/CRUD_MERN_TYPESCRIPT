import { createContext } from "react";
import { IEmployee } from "../models/IEmployee";

type EmployeContextType = {
  employe: Array<IEmployee>;
  setEmploye: React.Dispatch<React.SetStateAction<Array<IEmployee>>>;
};

const iEmployeContextState = {
  employe: [],
  setEmploye: () => {},
};
/* CREO EL CONTEXTO PARA INSTACIARLO CON LO SIGUIENTE */
export const EmployeContext =
  createContext<EmployeContextType>(iEmployeContextState);
