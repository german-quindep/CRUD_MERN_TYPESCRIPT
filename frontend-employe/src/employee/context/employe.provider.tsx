import { useEffect, useState } from "react";
import { IEmployee } from "../models/IEmployee";
import { getAllEmploye } from "../services/employe.services";
import { EmployeContext } from "./employe.context";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const EmployeProvider = ({ children }: props) => {
  const [employe, setEmploye] = useState<Array<IEmployee>>([]);
  /*  */
  const allUser = async () => {
    const resp = await getAllEmploye();
    setEmploye(resp);
  };
  /*  */
  useEffect(() => {
    allUser();
  }, []);
  return (
    <EmployeContext.Provider value={{ employe, setEmploye }}>
      {children}
    </EmployeContext.Provider>
  );
};
