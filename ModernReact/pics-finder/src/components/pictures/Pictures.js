import React from "react";
import PictureCard from "./PictureCard";
import "./Pictures.css";

const Pictures = props => {
  const pics = props.pics.map(pic => {
    return <PictureCard key={pic.id} pic={pic} />;
  });

  return <div className="pictures">{pics}</div>;
};

export default Pictures;
