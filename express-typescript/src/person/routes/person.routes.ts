import { Router } from "express";
import routesApi from "../../shared/routes/routesApi";
import { uuidValidate } from "../../shared/validators/shared.validators";
import {
  deletePerson,
  getPerson,
  getPersonId,
  postPerson,
  putPerson,
} from "../controllers/person.controllers";
import { personValidate } from "../validators/person.validators";

const routerPerson = Router();
/*  */
routerPerson.get(routesApi.person.get, getPerson);
/*  */
routerPerson.get(routesApi.person.getId, uuidValidate(), getPersonId);
/*  */
routerPerson.post(routesApi.person.get, personValidate(), postPerson);
/*  */
routerPerson.put(
  routesApi.person.getId,
  uuidValidate(),
  personValidate(),
  putPerson
);
/*  */
routerPerson.delete(routesApi.person.getId, uuidValidate(), deletePerson);

export default routerPerson;
