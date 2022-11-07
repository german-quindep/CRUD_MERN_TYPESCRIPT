import { DataTypes } from "sequelize";
import Person from "../../person/models/person.models";
import db from "../../shared/db/connection";

const Employee = db.define("employee", {
  id_employee: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  salary: {
    type: DataTypes.DOUBLE,
  },
  hours_extra: {
    type: DataTypes.NUMBER,
  },
  deparment: {
    type: DataTypes.STRING,
  },
  id_person: {
    type: DataTypes.UUID,
    references: {
      model: Person,
      key: "id_person",
    },
  },
});
/* DE UNO A MUCHOS UNA PERSONA TIENE MUCHO EMPLEADOS */
Employee.belongsTo(Person, {
  foreignKey: "id_person",
});

export default Employee;
