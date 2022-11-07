import { Card, InputNumber, InputText } from "primereact";
import React from "react";
import { ButtonsPrimary } from "../../../shared/components/Buttons/ButtonsPrimary";
import { AutocompletePerson } from "../../../person/components/AutoComplete/AutoComplete";
import "./styles.css";
import { EmployeComponent } from "./FormsEmployee.components";
import {
  validateDeparment,
  validateHours,
  validateSalary,
} from "../../validations/validateEmploye";
import { ErrorsInputs } from "../../../shared/errors/errorsMessage";
import { Controller } from "react-hook-form";
export const FormsEmployee = () => {
  const { errors, handleSubmit, onSubmit, register, control } =
    EmployeComponent();
  return (
    <React.Fragment>
      <Card>
        <h1>Form Employee</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*  */}
          <div className="form-group">
            <span className="p-float-label">
              <Controller
                control={control}
                name="salary"
                rules={validateSalary}
                render={({ field: { ref, ...field } }) => (
                  <InputNumber
                    {...field}
                    onChange={field.onChange}
                    value={field.value | 0}
                    inputId="currency-us"
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                  />
                )}
              />
              <label htmlFor="salary">Salary</label>
            </span>
            <ErrorsInputs message={errors?.salary?.message} />
          </div>
          {/*  */}
          <div className="form-group">
            <span className="p-float-label">
              <Controller
                control={control}
                name="hours_extra"
                rules={validateHours}
                render={({ field: { ref, ...field } }) => (
                  <InputNumber
                    {...field}
                    onChange={field.onChange}
                    value={field.value | 0}
                    inputId="minmax"
                    mode="decimal"
                    min={0}
                    max={40}
                  />
                )}
              />
              <label htmlFor="hours_extra">Hours Extra</label>
            </span>
            <ErrorsInputs message={errors?.hours_extra?.message} />
          </div>
          {/*  */}
          <div className="form-group">
            <span className="p-float-label">
              <InputText
                {...register("deparment", validateDeparment)}
                id="deparment"
              />
              <label htmlFor="deparment">Deparment</label>
            </span>
            <ErrorsInputs message={errors?.deparment?.message} />
          </div>
          {/*  */}
          <div className="form-group">
            <AutocompletePerson control={control} />
            <ErrorsInputs message={errors?.person?.id_person?.message} />
          </div>

          {/*  */}
          <div className="form-group">
            <ButtonsPrimary
              type="submit"
              label="Save"
              key={"FormEmploye"}
              styles={{ width: "100%", marginTop: "5%" }}
            />
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};
