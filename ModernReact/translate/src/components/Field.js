import React from "react";
import LangCtx from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LangCtx;
  render() {
    const text = this.context === "english" ? "Name" : "नाम";
    return (
      <div className="ui field">
        <label> {text} </label>
        <input />
      </div>
    );
  }
}

export default Field;
