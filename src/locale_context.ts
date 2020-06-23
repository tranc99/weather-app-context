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
    welcome_announcer: "Welcome, it's 68 Fahrenheit today.",
    weather_full_description:
      "Sunny with a chance of rain. Feels like 75.",
    wind_details: "Wind: 12 miles / hr",
    humidity_details: "Humidity: 38%",
    weather_last_updated: "Weather updated 3 mins ago."
  },
  french_fr: {
    language: {
      shortName: "Français",
      fullName: "Français (France)",
      changeLanguage: "Changer De Langue",
      language_str: "Langue"
    },
    siteName: "Weather.france",
    siteBranding: "Météo France 24/7",
    flag_image: "images/flag-france.png",
    welcome_announcer:
      "Bienvenue, il fait 20 degrés Celsius aujourd'hui",
    weather_full_description:
      "Ensoleillé avec risque de pluie. Se sent comme 24.",
    wind_details: "Vent: 19 km / h",
    humidity_details: "Humidité: 38%",
    weather_last_updated:
      "Météo mise à jour il y a 3 minutes."
  },
  german_de: {
    language: {
      shortName: "Deutsche",
      fullName: "Deutsche (Deutschland)",
      changeLanguage: "Sprache ändern",
      language_str: "Sprache"
    },
    siteName: "Weather.deutschland",
    siteBranding: "Deutschland Wetter 24/7",
    flag_image: "images/flag-germany.png",
    welcome_announcer:
      "Willkommen, heute sind es 20 Grad Celsius.",
    weather_full_description:
      "Sonnig mit Regenwahrscheinlichkeit. Fühlt sich an wie 24.",
    wind_details: "Wind: 19 km / h",
    humidity_details: "Luftfeuchtigkeit: 38%",
    weather_last_updated:
      "Wetter vor 3 Minuten aktualisiert."
  },
  japanese_jp: {
    language: {
      shortName: "日本人",
      fullName: "日本語（日本）",
      changeLanguage: "言語を変更",
      language_str: "言語"
    },
    siteName: "Weather.日本",
    siteBranding: "日本の天気年中無休",
    flag_image: "images/flag-japan.png",
    welcome_announcer: "ようこそ、今日は摂氏20度です。",
    weather_full_description:
      "雨の可能性がある晴れ。 24みたいな感じ。",
    wind_details: "風速：19 km /時",
    humidity_details: "湿度：38％",
    weather_last_updated: "天気は3分前に更新されました。"
  }
};
console.log(locales.english_us);
export const LocaleContext = React.createContext(
  locales.english_us
);
export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;
// export default locales;
