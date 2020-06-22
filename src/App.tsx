import React from "react";
import WeatherComponent from "./WeatherComponent";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm" />
        <div className="col-sm-8">
          <WeatherComponent />
        </div>
        <div className="col-sm" />
      </div>
    </div>
  );
}

export default App;
