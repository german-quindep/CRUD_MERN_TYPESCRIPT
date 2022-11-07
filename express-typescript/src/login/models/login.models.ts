import { DataTypes, Model } from "sequelize";
import db from "../../shared/db/connection";
import { ILogin } from "./login.interface";

const Login = db.define<Model<ILogin>>("user", {
  id_user: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.NUMBER,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

export default Login;
