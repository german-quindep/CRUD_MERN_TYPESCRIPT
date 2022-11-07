import { useEffect, useState } from "react";
import { AuthContext } from "./auth.context";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
  const [context, setContext] = useState<boolean | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("tokenUser");
    token ? setContext(true) : setContext(false);
  }, [context]); 
  return (
    <AuthContext.Provider value={{ context, setContext }}>
      {children}
    </AuthContext.Provider>
  );
};
