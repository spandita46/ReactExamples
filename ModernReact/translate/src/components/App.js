import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorCtx from "../contexts/ColourContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorCtx.Provider value="red">
            <UserCreate />
          </ColorCtx.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
