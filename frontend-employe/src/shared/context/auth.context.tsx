import { createContext } from "react";

type UserContextType = {
  context: boolean | null;
  setContext: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const iUserContextState = {
  context: null,
  setContext: () => {},
};
/* CREO EL CONTEXTO PARA INSTACIARLO CON LO SIGUIENTE */
export const AuthContext = createContext<UserContextType>(iUserContextState);
