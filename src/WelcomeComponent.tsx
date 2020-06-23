import React, { useContext } from "react";
import { LocaleContext } from "./locale_context";

const WelcomeComponent = (props) => {
  const locale = useContext(LocaleContext);

  return (
    <h5 className="card-title">
      {locale.welcome_announcer}
    </h5>
  );
};

export default WelcomeComponent;
