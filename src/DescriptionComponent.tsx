import React from "react";
import FlagComponent from "./FlagComponent";
import WelcomeComponent from "./WelcomeComponent";

const DescriptionComponent = props => {
  return (
    <div className="card mb-3">
      <FlagComponent />
      <div className="card-body">
        <WelcomeComponent />
        <p className="card-text">
          Sunny with a chance of meatballs. Feels like 75.
        </p>
        <p className="card-text">
          <em>Wind: 12 miles/hr</em>
        </p>
        <p className="card-text">
          <em>Humidity: 38%</em>
        </p>
        <p className="card-text">
          <small className="text-muted">Weather updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default DescriptionComponent;
