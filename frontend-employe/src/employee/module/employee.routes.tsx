import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ProgressSpinnerDemo } from "../../shared/components/Spinners/Spinners";
import routes from "../../shared/routes/routesFront.routes";
const IndexEmployee = lazy(() =>
  /* LAZY LOADING */
  import("../components/index").then((m) => ({
    default: m.EmployeeHtml,
  }))
);
/*  */
export const RouterEmployee = () => {
  return (
    <Routes>
      <Route
        path={routes.employee}
        element={
          <Suspense fallback={<ProgressSpinnerDemo />}>
            <IndexEmployee />
          </Suspense>
        }
      />
    </Routes>
  );
};
