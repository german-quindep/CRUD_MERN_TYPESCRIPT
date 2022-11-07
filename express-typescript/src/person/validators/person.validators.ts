import { check } from "express-validator";
import messagesErrors from "../../shared/messages/messagesErrors";

export const personValidate = () => [
  check("full_name")
    .notEmpty()
    .withMessage(`${messagesErrors.empty} full_name`)
    .isString()
    .withMessage(`${messagesErrors.string} full_name`)
    .isLength({ min: 3, max: 250 })
    .withMessage(`${messagesErrors.minMax} 3 a 250 caracteres`),
  check("identity")
    .notEmpty()
    .withMessage(`${messagesErrors.empty} identity`)
    .isNumeric()
    .withMessage(`${messagesErrors.number} identity`)
    .isLength({ max: 10 })
    .withMessage(`${messagesErrors.minMax} 10 caracteres`),
  check("state")
    .notEmpty()
    .withMessage(`${messagesErrors.empty} state`)
    .isBoolean()
    .withMessage(`${messagesErrors.boolean}`),
];
