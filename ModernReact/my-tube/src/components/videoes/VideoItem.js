import React from "react";

const VideoItem = ({ video, onSelect, video: { snippet } }) => {
  return (
    <div onClick={() => onSelect(video)} className="video-item item">
      <img
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
        className="ui image"
      />
      <div className="ui content">
        <div className="ui header">{snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
