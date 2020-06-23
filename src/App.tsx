import React, { useState } from "react";
import WeatherComponent from "./WeatherComponent";
import "./App.css";
import { locales } from "./locale_context";
import { LocaleProvider } from "./locale_context";

function App() {
  console.log(locales);

  const [appLocale, setAppLocale] = useState(
    locales.english_us
  );

  const changeLocale = (newLocale) => {
    setAppLocale(locales.french_fr);
  };

  return (
    <LocaleProvider value={appLocale}>
      <div className="container">
        <div className="row">
          <div className="col-sm" />
          <WeatherComponent
            onLanguageChange={changeLocale}
          />
          <div className="col-sm" />
        </div>
      </div>
    </LocaleProvider>
  );
}

export default App;
