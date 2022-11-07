import { Response } from "express";
import { validationResult } from "express-validator";
import messagesErrors from "../../shared/messages/messagesErrors";
import { RequestShare } from "../../shared/models/request.models";
import { IPerson } from "../models/person.interface";
import {
  deletePersonId,
  editPerson,
  getPersonIdServi,
  savePerson,
} from "../services/person.service";

export const getPerson = (_req: RequestShare<IPerson>, res: Response) => {
  return res.status(200).json("message person");
};

export const getPersonId = async (
  req: RequestShare<IPerson>,
  res: Response
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const { id } = req.params;
    const data = await getPersonIdServi(id);
    if (!data)
      return res
        .status(400)
        .json({ message: "Errors", errorrs: "No hay usuario con ese id" });
    return res.status(200).json({ message: "Successs", data });
  } catch (errors) {
    return res.status(500).json({ errors });
  }
};

export const postPerson = async (req: RequestShare<IPerson>, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const data = await savePerson(req.body);
    if (data) return res.json(req.body);
    return res.status(400).json({ errors: messagesErrors.errors400 });
  } catch (errors) {
    return res.status(500).json({ errors: messagesErrors.errorServer });
  }
};

export const putPerson = async (req: RequestShare<IPerson>, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const data = await editPerson(req.body, req.params.id);
    if (!data)
      return res.status(400).json({ errors: messagesErrors.errors400 });
    return res.status(200).json(data);
  } catch (errors) {
    return res.status(500).json({ errors: messagesErrors.errorServer });
  }
};

export const deletePerson = async (
  req: RequestShare<IPerson>,
  res: Response
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const data = await deletePersonId(req.params.id);
    if (!data)
      return res.status(400).json({ errors: messagesErrors.errors400 });
    return res.status(200).json({ success: messagesErrors.deleteSuccess });
  } catch (errors) {
    return res.status(500).json({ errors: messagesErrors.errorServer });
  }
};
