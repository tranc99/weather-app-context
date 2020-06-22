import React from "react";
import WeatherComponent from "./WeatherComponent";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm" />
        <div className="col-sm-8">
          <h2>Weather App</h2>
          <p>Component Hierarchy</p>
          <ol>
            <li>Weather Component</li>
            <li>Welcome</li>
            <li>Flag</li>
            <li>Weather description</li>
          </ol>
          <h2>The Actual Components</h2>
          <WeatherComponent />
        </div>
        <div className="col-sm" />
      </div>
    </div>
  );
}

export default App;
