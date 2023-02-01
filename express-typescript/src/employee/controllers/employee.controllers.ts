import { Response } from "express";
import { validationResult } from "express-validator";
import messagesErrors from "../../shared/messages/messagesErrors";
import { RequestShare } from "../../shared/models/request.models";
import { IEmployee } from "../models/employee.interface";
import {
  deleteEmployee,
  editEmploye,
  getIdEmployee,
  listEmployee,
  saveEmployee,
} from "../services/employee.service";
/* GET ALL EMPLOYEE */
export const getEmployee = async (
  _req: RequestShare<IEmployee>,
  res: Response
) => {
  try {
    const data = await listEmployee();
    if (!data) return res.status(400).json({ errors: messagesErrors.notData });
    return res.status(200).json({ data, message: "Success" });
  } catch (errors) {
    return res.status(500).json({ errors: messagesErrors.errorServer });
  }
};
/* GET ONE EMPLOYEE */
export const getEmployeeOne = async (
  req: RequestShare<IEmployee>,
  res: Response
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const data = await getIdEmployee(req.params.id);
    if (!data) return res.status(400).json({ errors: messagesErrors.notData });
    return res.status(200).json({ data, message: "Success" });
  } catch (errors) {
    return res.status(500).json({ errors: messagesErrors.errorServer });
  }
};
/* POST EMPLOYEE */
export const postEmployee = async (
  req: RequestShare<IEmployee>,
  res: Response
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const data = await saveEmployee(req.body);
    if (!data)
      return res.status(400).json({ errors: messagesErrors.errors400 });
    return res.status(201).json(req.body);
  } catch (errors) {
    return res.status(500).json({ errors: messagesErrors.errorServer });
  }
};
/* PUT EMPLOYEE */
export const putEmployee = async (
  req: RequestShare<IEmployee>,
  res: Response
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const data = await editEmploye(req.body, req.params.id);
    if (!data)
      return res.status(400).json({ errors: messagesErrors.errors400 });
    return res.status(200).json(data);
  } catch (errors) {
    return res.status(500).json({ errors: messagesErrors.errorServer });
  }
};
/* DELETE EMPLOYEE */
export const deletEmployee = async (
  req: RequestShare<IEmployee>,
  res: Response
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const data = await deleteEmployee(req.params.id);
    if (!data)
      return res.status(400).json({ errors: messagesErrors.errors400 });
    return res.status(200).json({ success: messagesErrors.deleteSuccess });
  } catch (errors) {
    return res.status(500).json({ errors: messagesErrors.errorServer });
  }
};
