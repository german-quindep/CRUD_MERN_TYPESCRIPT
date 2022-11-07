import { AutoComplete } from "primereact";
import { SearchPersonComponent } from "./Search.component";

export const AutocompletePerson = () => {
  const { filteredPerson, searchPersons, selectedPerson, setSelectedPersons } =
    SearchPersonComponent();
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
};
