import React from "react";
import FlagComponent from "./FlagComponent";
import WelcomeComponent from "./WelcomeComponent";
import DescriptionComponent from "./DescriptionComponent";

const WeatherComponent = props => {
  return (
    <div>
      <WelcomeComponent />
      <DescriptionComponent />
    </div>
  );
};

export default WeatherComponent;
