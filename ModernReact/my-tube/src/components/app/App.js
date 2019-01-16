import React, { Component } from "react";
import SearchBar from "../searchBar/SearchBar";
import Youtube from "../../helpers/YouTube";
import VideoPlayer from "../videoes/VideoPlayer";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  onSearchSubmit = async keyword => {
    const ytResponse = await Youtube.get("/search", {
      params: {
        q: keyword
      }
    });

    this.setState({
      videos: ytResponse.data.items,
      selectedVideo: ytResponse.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <VideoPlayer
          videos={this.state.videos}
          selectedVideo={this.state.selectedVideo}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
