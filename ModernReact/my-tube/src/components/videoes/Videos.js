import React from "react";
import VideoItem from "./VideoItem";

const Videos = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list videos">{videoItems}</div>;
};

export default Videos;
