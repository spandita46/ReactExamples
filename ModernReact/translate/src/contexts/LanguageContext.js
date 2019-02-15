import React from "react";
const Context = React.createContext("hindi");

export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onLanguageChange: this.onLanguageChange
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

// Why Redux?
// Better Documentation & Support

// Why Context?
// No Third Party Library
// Cons:
// Difficult to maintain different stores and sharing data between these stores will be difficult
