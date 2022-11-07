import { check } from "express-validator";
import messagesErrors from "../../shared/messages/messagesErrors";

export const loginValidate = () => [
  check("username")
    .notEmpty()
    .withMessage(`${messagesErrors.empty} username`)
    .isString()
    .withMessage(`${messagesErrors.string} username`)
    .isLength({
      min: 3,
      max: 100,
    })
    .withMessage(`${messagesErrors.minMax} 3 a 100 del username`),
  check("password")
    .notEmpty()
    .withMessage(`${messagesErrors.empty} password`)
    .isStrongPassword({
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      `${messagesErrors.password} minimo 8, una mayuscula,un numero, un caracter especial`
    ),
];
