import { DataTypes } from "sequelize";
import db from "../../shared/db/connection";

const Person = db.define("people", {
  id_person: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  full_name: {
    type: DataTypes.STRING,
  },
  identity: {
    type: DataTypes.NUMBER,
  },
  state: {
    type: DataTypes.BOOLEAN,
  },
});

export default Person;
