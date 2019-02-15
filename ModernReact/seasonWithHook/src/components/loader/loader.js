import React from "react";

const Loader = props => {
  return (
    <div className="ui active dimmer">
      <div className={`ui ${props.size} text loader`}>{props.text}</div>
    </div>
  );
};

Loader.defaultProps = {
  text: "Loading...",
  size: "large"
};

export default Loader;
