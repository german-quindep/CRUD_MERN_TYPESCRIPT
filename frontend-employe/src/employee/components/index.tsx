import React from "react";
import { Navbar } from "../../shared/components/Navbar/Navbar";
import { EmployeProvider } from "../context/employe.provider";
import { FormsEmployee } from "./forms/FormsEmployee";
import { ListEmployee } from "./list/ListEmploye";
import "./styles.css";
export const EmployeeHtml = () => {
  return (
    <EmployeProvider>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="items">
            <ListEmployee />
          </div>
          <div className="items">
            <FormsEmployee />
          </div>
        </div>
      </React.Fragment>
    </EmployeProvider>
  );
};
