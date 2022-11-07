import React from "react";
import { Navbar } from "../../Navbar/Navbar";
import { SectionsHtml } from "./sections";

export const IndexMain = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SectionsHtml />
    </React.Fragment>
  );
};
