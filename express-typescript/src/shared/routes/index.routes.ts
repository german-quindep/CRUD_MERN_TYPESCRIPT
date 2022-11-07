import Express from "express";
import routerEmploye from "../../employee/routes/employee.routes";
import routerLogin from "../../login/routes/login.routes";
import routerPerson from "../../person/routes/person.routes";
import { authUsers } from "../middleware/auth.guard";
import routesApi from "./routesApi";

const indexRoutes = (app: Express.Application) => {
  app.use(routesApi.api, routerLogin); //LOGIN
  app.use(routesApi.api, authUsers, routerPerson); //ROUTER PERSON
  app.use(routesApi.api, authUsers, routerEmploye); //EMPLOYEE
};

export default indexRoutes;
