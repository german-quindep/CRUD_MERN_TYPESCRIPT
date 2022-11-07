import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth.context";
import routesFront from "../../../shared/routes/routesFront.routes";
import { ILogin } from "../../models/ILogin";
import { postLogin } from "../../services/login.services";

export const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILogin>();
  const { setContext } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    const resp = await postLogin(data);
    setContext(true);
    navigate(`${routesFront.module}`);
  };

  return { register, handleSubmit, control, errors, onSubmit };
};
