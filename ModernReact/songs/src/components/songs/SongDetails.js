import React, { Component } from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  if (!song) {
    return null;
  }

  return (
    <div className="ui segment">
      <h3>Details For: </h3>
      <div className="ui content">
        <div className="ui header">{song.title}</div>
        <h5>Duration: {song.duration}</h5>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetails);
