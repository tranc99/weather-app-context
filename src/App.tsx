import React from "react";
import WeatherComponent from "./WeatherComponent";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm" />
        <WeatherComponent />
        <div className="col-sm" />
      </div>
    </div>
  );
}

export default App;
