import { Router } from "express";
import routesApi from "../../shared/routes/routesApi";
import { uuidValidate } from "../../shared/validators/shared.validators";
import {
  deletEmployee,
  getEmployee,
  getEmployeeOne,
  postEmployee,
  putEmployee,
} from "../controllers/employee.controllers";

import { employeeValidate } from "../validators/employee.validators";

const routerEmploye = Router();

routerEmploye.get(routesApi.employe.get, getEmployee);

routerEmploye.get(routesApi.employe.getId, uuidValidate(), getEmployeeOne);

routerEmploye.get(routesApi.employe.getId, uuidValidate());

routerEmploye.post(routesApi.employe.get, employeeValidate(), postEmployee);

routerEmploye.put(
  routesApi.employe.getId,
  uuidValidate(),
  employeeValidate(),
  putEmployee
);

routerEmploye.delete(routesApi.employe.getId, uuidValidate(), deletEmployee);

export default routerEmploye;
