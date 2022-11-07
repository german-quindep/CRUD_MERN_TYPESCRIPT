import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/auth.provider";
import { RouterPerson } from "../../person/module/person.routes";
import { RouterLogin } from "../../login/module/login.routes";
import { ProtectedRoutes } from "./Protected.routes";
import { RouterEmployee } from "../../employee/module/employee.routes";
import routesFront from "./routesFront.routes";
import { RouterMain } from "../components/main/module/main.routes";
export const RoutesHtml = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={routesFront.index + "*"} element={<RouterLogin />} />
          <Route
            path={"/" + routesFront.module + "/*"}
            element={
              <ProtectedRoutes>
                <RouterMain />
                <RouterPerson />
                <RouterEmployee />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};
