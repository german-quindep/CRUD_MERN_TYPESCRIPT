import { AutoComplete } from "primereact";
import { Control, Controller } from "react-hook-form";
import { IEmployee } from "../../../employee/models/IEmployee";
import { validatePerson } from "../../../employee/validations/validateEmploye";
import { SearchPersonComponent } from "./Search.component";

export const AutocompletePerson = (control:any) => {
  const { filteredPerson, searchPersons, selectedPerson, setSelectedPersons } =
    SearchPersonComponent();
  if (control) {
    return (
      <span className="p-float-label">
        <Controller
          control={control}
          name="person.id_person"
          rules={validatePerson}
          render={({ field: { ref, ...field } }) => (
            <AutoComplete
              {...field}
              onChange={field.onChange}
              value={field.value || selectedPerson}
              suggestions={filteredPerson}
              completeMethod={searchPersons}
              field="full_name"
              aria-label="Persons"
            />
          )}
        />
      </span>
    );
  } else {
    return (
      <div className="form-group">
        <span className="p-float-label">
          <AutoComplete
            value={selectedPerson}
            suggestions={filteredPerson}
            completeMethod={searchPersons}
            field="full_name"
            onChange={(e) => setSelectedPersons(e.value)}
            aria-label="Persons"
          />
          <label htmlFor="person_id">Name person</label>
        </span>
      </div>
    );
  }
};
