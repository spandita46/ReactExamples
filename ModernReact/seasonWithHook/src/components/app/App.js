import React from "react";
import DisplaySeason from "../displaySeason/displaySeason";
import Loader from "../loader/loader";
import useLocation from "../../helper/useLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();

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

  return <div className="border red">{content}</div>;
};

export default App;
