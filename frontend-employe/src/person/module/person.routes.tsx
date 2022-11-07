import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ProgressSpinnerDemo } from "../../shared/components/Spinners/Spinners";
import routes from "../../shared/routes/routesFront.routes";
const IndexPerson = lazy(() =>
  /* LAZY LOADING */
  import("../components/index").then((m) => ({
    default: m.IndexPerson,
  }))
);
export const RouterPerson = () => {
  return (
    <Routes>
      <Route
        path={routes.person}
        element={
          <Suspense fallback={<ProgressSpinnerDemo />}>
            <IndexPerson />
          </Suspense>
        }
      />
    </Routes>
  );
};
