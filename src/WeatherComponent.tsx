import React from "react";
import DescriptionComponent from "./DescriptionComponent";

const locales = {
  english_us: {
    siteName: "Weather.us",
    siteBranding: "US weather 24/7"
  },
  french_fr: {},
  german_de: {},
  japanese_jp: {}
};

const locale = locales.english_us;

const WeatherComponent = props => {
  return (
    <div className="col-sm-6">
      <h1 className="display-4">
        {locale.siteName}
        <small className="text-muted">&nbsp;{locale.siteBranding}</small>
      </h1>
      <DescriptionComponent />
    </div>
  );
};

export default WeatherComponent;
