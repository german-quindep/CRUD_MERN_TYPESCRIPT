import { param } from "express-validator";
import messagesErrors from "../messages/messagesErrors";

export const uuidValidate = () => [
  param("id")
    .notEmpty()
    .withMessage(`${messagesErrors.empty} el parametro id`)
    .isUUID()
    .withMessage(`${messagesErrors.uuid}`),
];
