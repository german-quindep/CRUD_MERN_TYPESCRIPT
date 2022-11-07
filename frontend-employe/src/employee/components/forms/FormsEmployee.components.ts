import { SubmitHandler, useForm } from "react-hook-form";
import { IEmployee } from "../../models/IEmployee";

export const EmployeComponent = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IEmployee>();

  const onSubmit: SubmitHandler<IEmployee> = async (data) => {
    console.log(data);
  };

  return { register, handleSubmit, control, errors, onSubmit };
};
