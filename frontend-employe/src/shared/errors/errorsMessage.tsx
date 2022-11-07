import "./styles.css";

interface ErrorsInputs {
  message?: string;
}
export const ErrorsInputs = ({ message }: ErrorsInputs) => (
  <p className="error-inputs">{message}</p>
);
