import { IPerson } from "../models/person.interface";
import Person from "../models/person.models";
/*  */
export const getPersonIdServi = async (id_person: string) => {
  try {
    const person = await Person.findByPk(id_person);
    if (!person) return false;
    return person;
  } catch (errors) {
    console.log(errors);
  }
};
/* SAVE PERSON  */
export const savePerson = async (personBody: IPerson) => {
  try {
    const { full_name, identity, state } = personBody;
    const person = await Person.build({ full_name, identity, state });
    await person.save();
    return person;
  } catch (error) {
    console.log(error);
  }
};
/* EDIT PERSON */
export const editPerson = async (personBody: IPerson, id_person: string) => {
  try {
    const person = await getPersonIdServi(id_person);
    if (!person) return false; //SI ES FALSO RETORNAMOS
    await person.update(personBody);
    return person;
  } catch (errors) {
    console.log(errors);
  }
};
/* DELETE PERSON */
export const deletePersonId = async (id_person: string) => {
  try {
    const person = await Person.findByPk(id_person);
    if (!person) return false;
    await person.update({ state: false });
    return true;
  } catch (errors) {
    console.log(errors);
  }
};
