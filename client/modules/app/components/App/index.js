import React from "react";
import { Switch, Route } from "react-router-dom";
import { themr } from "react-css-themr";
import { Calendar } from "modules/calendar";

import appTheme from "./theme.scss";

export function App({ theme }) {
  return (
    <div className={theme.app}>
      <Calendar />
    </div>
  );
}

export default themr("", appTheme)(App);
