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

  const changeLocale = (newLocale: string) => {
    switch (newLocale) {
      case "english_us":
        setAppLocale(locales.english_us);
        break;
      case "french_fr":
        setAppLocale(locales.french_fr);
        break;
      case "german_de":
        setAppLocale(locales.german_de);
        break;
      case "japanese_jp":
        setAppLocale(locales.japanese_jp);
        break;
      default:
        setAppLocale(locales.english_us);
    }
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
