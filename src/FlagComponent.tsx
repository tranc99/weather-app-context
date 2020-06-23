import React, { useContext } from "react";
import { LocaleContext } from "./locale_context";

interface FlagComponentProps {
  onLanguageChange: any;
}

const FlagComponent = (props: FlagComponentProps) => {
  const locale = useContext(LocaleContext);

  const handleChange = (event: any) => {
    const newLocale = event.target.value;
    const performLocaleUpdate = props.onLanguageChange;
    performLocaleUpdate(newLocale);
  };

  return (
    <React.Fragment>
      <p>
        {locale.language.language_str}:{" "}
        {locale.language.fullName}
      </p>
      <div className="form-group">
        <label htmlFor="languageSelect">
          {locale.language.changeLanguage}
        </label>
        <select
          className="form-control"
          id="languageSelect"
          onChange={handleChange}
        >
          <option value="english_us">English</option>
          <option value="french_fr">Français</option>
          <option value="german_de">Deutsch</option>
          <option value="japanese_jp">日本語</option>
        </select>
      </div>
      <img
        src={locale.flag_image}
        className="card-img-top"
        style={{ height: "15rem" }}
        alt="..."
      />
    </React.Fragment>
  );
};

export default FlagComponent;
