import React from "react";
import WeatherComponent from "./WeatherComponent";
import "./App.css";
import { locales } from "./locale_context";
import { LocaleProvider } from "./locale_context";

function App() {
  console.log(locales);
  return (
    <LocaleProvider value={locales.english_us}>
      <div className="container">
        <div className="row">
          <div className="col-sm" />
          <WeatherComponent />
          <div className="col-sm" />
        </div>
      </div>
    </LocaleProvider>
  );
}

export default App;
