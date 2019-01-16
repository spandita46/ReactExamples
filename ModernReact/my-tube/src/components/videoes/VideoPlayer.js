import React from "react";
import Videos from "./Videos";
import "./VideoPlayer.css";
import VideoDetail from "./VideoDetail";

const VideoPlayer = props => {
  return (
    <div className="video-player ui grid">
      <div className="ui row">
        <div className="eleven wide column">
          <VideoDetail video={props.selectedVideo} />
        </div>
        <div className="five wide column">
          <Videos videos={props.videos} onVideoSelect={props.onVideoSelect} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
