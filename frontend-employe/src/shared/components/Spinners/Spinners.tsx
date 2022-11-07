import { ProgressSpinner } from "primereact/progressspinner";
export const ProgressSpinnerDemo = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "10%" }}>
      <div className="card">
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      </div>
    </div>
  );
};
