import { Router } from "express";
import routesApi from "../../shared/routes/routesApi";
import { postLogin, registerLogin } from "../controllers/login.controllers";
import { loginValidate } from "../validators/loginValidate";

const routerLogin = Router();

routerLogin.post(routesApi.login.get, loginValidate(), postLogin);
routerLogin.post(routesApi.login.register, loginValidate(), registerLogin);

export default routerLogin;
