import { Card, InputNumber, InputText } from "primereact";
import React from "react";
import { ButtonsPrimary } from "../../../shared/components/Buttons/ButtonsPrimary";
import { AutocompletePerson } from "../../../person/components/AutoComplete/AutoComplete";
import "./styles.css";
export const FormsEmployee = () => {
  return (
    <React.Fragment>
      <Card>
        <h1>Form Employee</h1>
        <form>
          {/*  */}
          <div className="form-group">
            <span className="p-float-label">
              <InputNumber
                inputId="currency-us"
                mode="currency"
                currency="USD"
                locale="en-US"
                id="salary"
              />
              <label htmlFor="salary">Salary</label>
            </span>
          </div>
          {/*  */}
          <div className="form-group">
            <span className="p-float-label">
              <InputNumber
                id="hours_extra"
                inputId="minmax"
                mode="decimal"
                min={0}
                max={40}
              />
              <label htmlFor="hours_extra">Hours Extra</label>
            </span>
          </div>
          {/*  */}
          <div className="form-group">
            <span className="p-float-label">
              <InputText id="deparment" value={""} />
              <label htmlFor="deparment">Username</label>
            </span>
          </div>
          {/*  */}
          <AutocompletePerson />
          {/*  */}
          <ButtonsPrimary
            label="Save"
            type="submit"
            key={"FormEmploye"}
            styles={{ width: "100%", marginTop: "5%" }}
          />
        </form>
      </Card>
    </React.Fragment>
  );
};
