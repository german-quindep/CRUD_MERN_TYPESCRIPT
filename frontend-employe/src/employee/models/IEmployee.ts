import { IPerson } from "../../person/models/IPerson";

export interface IEmployee {
  id_employee?: string;
  salary: number;
  hours_extra: number;
  deparment: string;
  person: IPerson;
}
