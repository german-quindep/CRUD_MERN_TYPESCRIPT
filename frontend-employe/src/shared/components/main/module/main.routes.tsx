import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ProgressSpinnerDemo } from "../../Spinners/Spinners";
const IndexMain = lazy(() =>
  /* LAZY LOADING */
  import("../components/index").then((m) => ({
    default: m.IndexMain,
  }))
);
export const RouterMain = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<ProgressSpinnerDemo />}>
            <IndexMain />
          </Suspense>
        }
      />
    </Routes>
  );
};
