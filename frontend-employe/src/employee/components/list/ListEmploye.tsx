import React, { useContext } from "react";
import { EmployeContext } from "../../context/employe.context";
import {
  Button,
  Column,
  DataTable,
  DataTableSelectionChangeParams,
} from "primereact";
import "./styles.css";
import { IEmployee } from "../../models/IEmployee";
export const ListEmployee = () => {
  const { employe } = useContext(EmployeContext);
  
  const setSelectedProducts2 = (e: DataTableSelectionChangeParams) => {
    console.log(e);
  };
  /* TRANSFORM DINERS */
  const trasnformDinner = (rowData: IEmployee) => {
    return `${formatCurrency(rowData.salary)}`;
  };
  /* FORMAT DINNERS */
  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const actionBodyTemplate = (rowData: IEmployee) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-warning button-margin"
          onClick={() => console.log(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => console.log(rowData)}
        />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <h3>List Employee</h3>
      <div className="card p-fluid">
        <DataTable
          value={employe}
          stripedRows
          selectionMode="single"
          dataKey="id"
          onSelectionChange={(e) => setSelectedProducts2(e.value)}
          responsiveLayout="scroll"
        >
          <Column
            field="id_employee"
            header="Code"
            bodyClassName="codeEmploye"
          />
          <Column field="person.full_name" header="Nombre persona" />
          <Column field="person.identity" header="Identidad" />
          <Column field="deparment" header="Departamento" />
          <Column
            field="salary"
            header="Salario"
            bodyClassName="center-text"
            body={trasnformDinner}
          />
          <Column
            field="hours_extra"
            header="Horas Extras"
            bodyClassName="center-text"
          />
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{ minWidth: "8rem" }}
          />
        </DataTable>
      </div>
    </React.Fragment>
  );
};
