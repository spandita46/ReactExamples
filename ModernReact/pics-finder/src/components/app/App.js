import React, { Component } from "react";

import SearchBar from "../searchBar/SearchBar";
import Pictures from "../pictures/Pictures";
import Unsplash from "../../helpers/Unsplash";

class App extends React.Component {
  state = { pics: [] };

  onSearchSubmit = async keyword => {
    const unsplashResp = await Unsplash.get("/search/photos", {
      params: {
        query: keyword
      }
    });

    this.setState({
      pics: unsplashResp.data.results
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <Pictures pics={this.state.pics} />
        <div>Found {this.state.pics.length} Pictures</div>
      </div>
    );
  }
}

export default App;
