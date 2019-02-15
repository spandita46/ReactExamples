import React, { Component, useState, useEffect } from "react";
import DisplaySeason from "../displaySeason/displaySeason";
import Loader from "../loader/loader";

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      error => setErrorMessage(error.message)
    );
  }, []);

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = (
      <div>
        <DisplaySeason lat={lat} />
      </div>
    );
  } else {
    content = <Loader size="massive" text="Detecting Location & Weather" />;
  }

  return <div className="boreder red">{content}</div>;
};

export default App;
