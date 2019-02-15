import React from "react";
import LangCtx from "../contexts/LanguageContext";
import ColorCtx from "../contexts/ColourContext";

class Button extends React.Component {
  renderSubmitText = language => {
    return language === "english" ? "Submit" : "जमा करें";
  };

  renderButton = color => {
    const classVal = `ui button ${color || "primary"}`;
    return (
      <button className={classVal}>
        <LangCtx.Consumer>
          {({ language }) => this.renderSubmitText(language)}
        </LangCtx.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorCtx.Consumer>{color => this.renderButton(color)}</ColorCtx.Consumer>
    );
  }
}

export default Button;
