import { Request } from "express";

export interface RequestShare<T> extends Request {
  body: T;
}
