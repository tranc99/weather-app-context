import React from "react";

export const locales = {
  english_us: {
    language: {
      shortName: "English",
      fullName: "English (US)",
      changeLanguage: "Change Language",
      language_str: "Language"
    },
    siteName: "Weather.usa",
    siteBranding: "US weather 24/7",
    flag_image: "images/flag-us.jpg",
    welcome_announcer: "Welcome, it's 68 Fahrenheit today",
    weather_full_description:
      "Sunny with a chance of rain. Feels like 75.",
    wind_details: "Wind: 12 miles/hr",
    humidity_details: "Humidity: 38%",
    weather_last_updated: "Weather updated 3 mins ago"
  },
  french_fr: {
    language: {
      shortName: "Français",
      fullName: "Français (France)",
      changeLanguage: "Changer De Langue",
      language_str: "Langue"
    },
    siteName: "Weather.us",
    siteBranding: "US weather 24/7",
    flag_image: "FLAG_URL",
    welcome_announcer: "ANNOUNCER TEXT HERE",
    weather_full_description: "FULL DESCRIPTION HERE",
    wind_details: "WIND DETAILS HERE",
    humidity_details: "HUMIDITY DETAILS HERE",
    weather_last_updated: "WEATHER LAST UPDATED HERE"
  },
  german_de: {
    language: {
      shortName: "English",
      fullName: "English (US)",
      changeLanguage: "Change Language",
      language_str: "Language"
    },
    siteName: "Weather.us",
    siteBranding: "US weather 24/7",
    flag_image: "FLAG_URL",
    welcome_announcer: "ANNOUNCER TEXT HERE",
    weather_full_description: "FULL DESCRIPTION HERE",
    wind_details: "WIND DETAILS HERE",
    humidity_details: "HUMIDITY DETAILS HERE",
    weather_last_updated: "WEATHER LAST UPDATED HERE"
  },
  japanese_jp: {
    language: {
      shortName: "English",
      fullName: "English (US)",
      changeLanguage: "Change Language",
      language_str: "Language"
    },
    siteName: "Weather.us",
    siteBranding: "US weather 24/7",
    flag_image: "FLAG_URL",
    welcome_announcer: "ANNOUNCER TEXT HERE",
    weather_full_description: "FULL DESCRIPTION HERE",
    wind_details: "WIND DETAILS HERE",
    humidity_details: "HUMIDITY DETAILS HERE",
    weather_last_updated: "WEATHER LAST UPDATED HERE"
  }
};
console.log(locales.english_us);
export const LocaleContext = React.createContext(
  locales.english_us
);
export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;
// export default locales;
