import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../../../login/services/login.services";
import { AuthContext } from "../../context/auth.context";
import routesFront from "../../routes/routesFront.routes";
import { items, NavItems } from "./itemsNav";
import "./styles.css";
export const Navbar = () => {
  const navigate = useNavigate();
  const { setContext } = useContext(AuthContext);

  const signOutClick = () => {
    setContext(false); //SETEO EL CONTEXTO EN FALSE PARA REMOVER EL TOKEN
    removeToken();
    navigate(`${routesFront.index}`); //REDIRIJO AL LOGIN DE USUARIO
  };
  return (
    <nav className="nav-container">
      <NavLink to="/" className="items-nav">
        Navbar
      </NavLink>
      {items.map((resp: NavItems) => (
        <NavLink
          key={resp.id}
          className={({ isActive }) =>
            isActive ? "items-nav actived" : "items-nav"
          }
          to={resp.link}
        >
          {resp.label}
        </NavLink>
      ))}
      <Link to="/" onClick={signOutClick} className="items-nav">
        Sign Out
      </Link>
    </nav>
  );
};
