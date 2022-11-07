import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/configVar";
import messagesErrors from "../messages/messagesErrors";

export const authUsers = (req: Request, res: Response, next: NextFunction) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({ errors: messagesErrors.authToken });
  }
  try {
    jwt.verify(token, config.tokenKey);
  } catch (err) {
    return res.status(401).json({ errors: messagesErrors.tokenInvaild });
  }
  return next();
};
