import { AutoCompleteCompleteMethodParams } from "primereact";
import { useState } from "react";
import { IPerson } from "../../models/IPerson";



export const SearchPersonComponent=()=>{
    
    const [filteredPerson, setFilteredPersons] = useState<Array<IPerson>>([]);
    const [selectedPerson, setSelectedPersons] = useState<string>("");
  
    const persons: Array<IPerson> = [
      { full_name: "Pepe Jose", id_person: "asdasdasdasdasd",state:true,identity:98762123 },
      { full_name: "Lucho Pancho", id_person: "sdasda" ,state:true,identity:9876521 },
      { full_name: "Juan Carlos", id_person: "qwe123" ,state:true,identity:123242 },
      { full_name: "Mario Jose", id_person: "gfsd23" ,state:true,identity:535657 },
    ];
  
    const searchPersons = (event: AutoCompleteCompleteMethodParams) => {
      let _filteredCountries: any;
      if (!event.query.trim().length) {
        _filteredCountries = [...persons];
      } else {
        _filteredCountries = persons.filter((persons: IPerson) => {
          return persons.full_name
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }
      setFilteredPersons(_filteredCountries);
    };

    return {selectedPerson, filteredPerson, searchPersons, setSelectedPersons}
}