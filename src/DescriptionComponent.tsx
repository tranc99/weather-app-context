import React, { useContext } from "react";
import FlagComponent from "./FlagComponent";
import WelcomeComponent from "./WelcomeComponent";
import { LocaleContext } from "./locale_context";

interface DescriptionComponentProps {
  onLanguageChange: object;
}

const DescriptionComponent = (
  props: DescriptionComponentProps
) => {
  const locale = useContext(LocaleContext);

  return (
    <div className="card mb-3">
      <FlagComponent {...props} />
      <div className="card-body">
        <WelcomeComponent />
        <p className="card-text">
          {locale.weather_full_description}
        </p>
        <p className="card-text">
          <em>{locale.wind_details}</em>
        </p>
        <p className="card-text">
          <em>{locale.humidity_details}</em>
        </p>
        <p className="card-text">
          <small className="text-muted">
            {locale.weather_last_updated}
          </small>
        </p>
      </div>
    </div>
  );
};

export default DescriptionComponent;
