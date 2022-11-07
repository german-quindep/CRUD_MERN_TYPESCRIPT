import { InputText, Password } from "primereact";
import React from "react";
import { Controller } from "react-hook-form";
import { ButtonsPrimary } from "../../../shared/components/Buttons/ButtonsPrimary";
import { ErrorsInputs } from "../../../shared/errors/errorsMessage";
import {
  validatePassword,
  validateUsername,
} from "../../validation/validateForm";
import { LoginComponent } from "./FormLogin.components";
import "./stylesForm.css";
export const FormLoginHtml = () => {
  const { errors, handleSubmit, onSubmit, register, control } =
    LoginComponent();

  return (
    <React.Fragment>
      <div className="items">
        <h4 className="h4-Login">Login</h4>
      </div>
      <div className="items">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username</label>
          <div className="form-group">
            <span className="p-input-icon-left">
              <i className="pi pi-user" />
              <InputText
                {...register("username", validateUsername)}
                placeholder="username"
                id="username"
              />
            </span>
            <ErrorsInputs message={errors?.username?.message} />
          </div>
          <label htmlFor="password">Password</label>
          <div className="form-group">
            <Controller
              control={control}
              name="password"
              rules={validatePassword}
              render={({ field: { ref, ...field } }) => (
                <Password
                  {...field}
                  onChange={field.onChange}
                  id="password"
                  value={field.value || ""}
                  toggleMask
                  placeholder="********"
                />
              )}
            />
            <ErrorsInputs message={errors?.password?.message} />
          </div>
          <div className="form-group">
            <ButtonsPrimary
              type="submit"
              label="Sign in"
              styles={{ width: "100%" }}
            />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
