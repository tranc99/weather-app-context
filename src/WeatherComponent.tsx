import React, { useContext } from "react";
import DescriptionComponent from "./DescriptionComponent";
import { LocaleContext } from "./locale_context";

interface WeatherComponentProps {
  onLanguageChange: object;
}

const WeatherComponent = (props: WeatherComponentProps) => {
  const locale = useContext(LocaleContext);

  return (
    <div className="col-sm-6">
      <h1 className="display-4">
        {locale.siteName}
        <small className="text-muted">
          &nbsp;{locale.siteBranding}
        </small>
      </h1>
      <DescriptionComponent {...props} />
    </div>
  );
};

export default WeatherComponent;
