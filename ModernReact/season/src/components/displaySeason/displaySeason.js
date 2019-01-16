import React from "react";
import "./displaySeason.css";

const seasons = {
  summer: {
    text: "Bro, It's Hot Here!!",
    iconName: "sun",
    seasonClass: "summer"
  },
  winter: {
    text: "Macha, It's Freezing Here!!",
    iconName: "snowflake",
    seasonClass: "winter"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const DisplaySeason = props => {
  const { text, iconName, seasonClass } = seasons[
    getSeason(props.lat, new Date().getMonth())
  ];

  return (
    <div className={`display-season ${seasonClass}`}>
      <i className={`${iconName} icon-left massive icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon-right massive icon`} />
    </div>
  );
};

export default DisplaySeason;
