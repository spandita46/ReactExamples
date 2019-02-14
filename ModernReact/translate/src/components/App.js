import React from "react";
import UserCreate from "./UserCreate";
import LangCtx from "../contexts/LanguageContext";
import ColorCtx from "../contexts/ColourContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select A Language:&nbsp;
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("hindi")}
          />
        </div>
        <LangCtx.Provider value={this.state.language}>
          <ColorCtx.Provider value="red">
            <UserCreate />
          </ColorCtx.Provider>
        </LangCtx.Provider>
      </div>
    );
  }
}

export default App;
