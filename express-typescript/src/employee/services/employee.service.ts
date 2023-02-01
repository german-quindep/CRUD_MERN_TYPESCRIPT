/* import { QueryTypes } from "sequelize"; */
import Person from "../../person/models/person.models";
import { IEmployee } from "../models/employee.interface";
import Employee from "../models/employee.models";

export const listEmployee = async () => {
  try {
    const employe = await Employee.findAll({
      include: [
        { model: Person, attributes: ["full_name", "identity"] },
      ] /* LEFT JOIN AND UNIQUE ATTRIBUTE FULL_NAME */,
    });
    return !employe ? false : employe;
  } catch (errors) {
    console.log(errors);
  }
};

export const getIdEmployee = async (id: string) => {
  try {
    const employe = await Employee.findByPk(id);
    return !employe ? false : employe;
  } catch (errors) {
    console.log(errors);
  }
};

export const saveEmployee = async (employeBody: IEmployee) => {
  try {
    const { deparment, hours_extra, id_person, salary } = employeBody;
    const employe = await Employee.build({
      deparment,
      hours_extra,
      id_person,
      salary,
    });
    await employe.save();
    return employe;
  } catch (error) {
    console.log(error);
  }
};

export const editEmploye = async (employee: IEmployee, id_employee: string) => {
  try {
    const employeId = await getIdEmployee(id_employee);
    if (!employeId) return false;
    await employeId.update(employee);
    return employeId;
  } catch (errors) {
    console.log(errors);
  }
};

export const deleteEmployee = async (id_employee: string) => {
  try {
    const employeId = await getIdEmployee(id_employee);
    if (!employeId) return false;
    await employeId.destroy();
    return employeId;
  } catch (errors) {
    console.log(errors);
  }
};
