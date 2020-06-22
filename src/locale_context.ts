import React from "react";

const locales = {
  english_us: {
    siteName: "Weather.us",
    siteBranding: "US weather 24/7"
  },
  french_fr: {},
  german_de: {},
  japanese_jp: {}
};

export const LocaleContext = React.createContext(locales.english_us);

export default locales;
