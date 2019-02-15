import React from "react";
import LangCtx from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LangCtx;

  render() {
    return (
      <div>
        Select A Language:&nbsp;
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag in"
          onClick={() => this.context.onLanguageChange("hindi")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
