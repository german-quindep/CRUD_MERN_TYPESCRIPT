import React from "react";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "./App.css";
import { RoutesHtml } from "./shared/routes/routes";
function App() {
  return (
    <React.Fragment>
      <RoutesHtml />
    </React.Fragment>
  );
}

export default App;
