import { lazy, Suspense, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth.context";
import routesFront from "../../shared/routes/routesFront.routes";
const IndexLogin = lazy(() =>
  /* LAZY LOADING */
  import("../components/index").then((m) => ({
    default: m.IndexLoginHtml,
  }))
);
/*  */
export const RouterLogin = () => {
  const { context } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            {context ? (
              <Navigate to={"/" + routesFront.module} />
            ) : (
              <IndexLogin />
            )}
          </Suspense>
        }
      />
    </Routes>
  );
};
