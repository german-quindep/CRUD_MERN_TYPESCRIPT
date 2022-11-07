import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

type MyProps = {
  auth?: boolean | null;
  children: JSX.Element[] | JSX.Element;
};

export const ProtectedRoutes = ({ children }: MyProps): JSX.Element => {
  /* PROTECTED ROUTES */
  const { context } = useContext(AuthContext);
  if (context) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return <Navigate to={"/"} />;
  }
};
