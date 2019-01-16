import React, { Component } from "react";
import SongList from "../songs/SongList";
import SongDetails from "../songs/SongDetails";

const App = () => {
  return (
    <div className="ui container">
      <div className="ui segment">
        <div className="ui  grid">
          <div className="ui row">
            <div className="ui column eight wide">
              <SongList />
            </div>
            <div className="ui column six wide">
              <SongDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
