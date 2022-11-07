import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../shared/config/configVar";
import { ILogin } from "../models/login.interface";
import Login from "../models/login.models";

const encryptPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, bcrypt.genSaltSync(8));
};

const jsonTransform = async (form: ILogin): Promise<ILogin> => {
  const { username, password } = form;
  const passwordBcrypt = await encryptPassword(password);
  return { username, password: passwordBcrypt };
};

const generatedToken = (users: any): string => {
  const token = jwt.sign({ ...users }, config.tokenKey, { expiresIn: 60 * 60 * 60});
  return token;
};

export const verifyUsername = async (username: string) => {
  const user = await Login.findOne({ where: { username } });
  return user;
};

export const validatePassword = async (
  password: string,
  passwordBD: string
): Promise<boolean> => {
  return await bcrypt.compareSync(password, passwordBD);
};

export const saveLogin = async (form: ILogin) => {
  try {
    const formTransform = await jsonTransform(form);
    const login = await Login.build({ ...formTransform });
    if (!login) return false;
    await login.save();
    return login;
  } catch (error) {
    console.log(error);
  }
};

export const postLoginToken = async (form: ILogin) => {
  try {
    const { username, password } = form;
    const person = await Login.findOne({
      where: { username },
      attributes: ["username", "password"],
    });
    if (!person) return false;
    const passwordCheck = await validatePassword(
      password,
      person.toJSON().password
    );
    if (passwordCheck) {
      const token = generatedToken(person);
      return token;
    } else {
      return false;
    }
  } catch (errors) {
    console.log(errors);
  }
};
