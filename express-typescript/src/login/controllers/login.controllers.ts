import { Request, Response } from "express";
import { validationResult } from "express-validator";
import messagesErrors from "../../shared/messages/messagesErrors";
import {
  postLoginToken,
  saveLogin,
  verifyUsername,
} from "../services/login.service";

export const registerLogin = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const checkUsername = await verifyUsername(req.body.username); //CHECK VERIFY USERNAME
    if (checkUsername)
      return res
        .status(400)
        .json({ errors: messagesErrors.userDuplicated, messages: "Error" });
    const formLogin = await saveLogin(req.body); //SAVE LOGIN
    if (!formLogin)
      return res.status(400).json({ errors: messagesErrors.errors400 });
    return res.status(200).json({ data: formLogin, messages: "Exito" });
  } catch (errors) {
    res.status(500).json({ errors: messagesErrors.errorServer });
  }
};

export const postLogin = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const token = await postLoginToken(req.body);
    if (!token)
      return res.status(400).json({
        errors: messagesErrors.usuarioOContrasena,
        messagesErrors: "Errors",
      });
    return res.status(200).json({ data: token });
  } catch (errors) {
    return res.status(500).json({ errors: messagesErrors.errorServer });
  }
};
