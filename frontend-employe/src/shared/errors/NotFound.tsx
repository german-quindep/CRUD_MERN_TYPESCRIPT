import React from "react";
import { NavLink } from "react-router-dom";
import routesFront from "../routes/routesFront.routes";

export const NotFoundHtml = () => {
  return (
    <React.Fragment>
      <h1>Pagina no encontrada</h1>
      <NavLink to={routesFront.index}>Dar Click aqui para regresar</NavLink>
    </React.Fragment>
  );
};
