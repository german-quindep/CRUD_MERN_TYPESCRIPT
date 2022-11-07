import { check } from "express-validator";
import messagesErrors from "../../shared/messages/messagesErrors";

export const employeeValidate = () => [
  check("salary")
    .notEmpty()
    .withMessage(`${messagesErrors.empty} salary`)
    .isInt()
    .withMessage(`${messagesErrors.number}`)
    .isLength({ max: 2 })
    .withMessage(`${messagesErrors.minMax} :1 y 2`),
  check("hours_extra")
    .notEmpty()
    .withMessage(`${messagesErrors.empty} hours_extra`)
    .isInt()
    .withMessage(`${messagesErrors.number}`)
    .isLength({ max: 2 })
    .withMessage(`${messagesErrors.minMax}: 1 y 2`),
  check("deparment")
    .notEmpty()
    .withMessage(`${messagesErrors.empty} deparment`)
    .isString()
    .withMessage(`${messagesErrors.string}`)
    .isLength({ min: 5, max: 20 })
    .withMessage(`${messagesErrors.minMax} 5 hasta 20`),
  check("id_person")
    .notEmpty()
    .withMessage(`${messagesErrors.empty} id_person`)
    .isUUID()
    .withMessage(`${messagesErrors.uuid}`),
];
