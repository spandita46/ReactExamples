import React from "react";
const renderVideoDetails = video => {
  let element = null;
  if (video) {
    const {
      snippet,
      id: { videoId }
    } = video;

    element = (
      <>
        <div className="ui embed">
          <iframe
            title="Video Player"
            src={`https://www.youtube.com/embed/${videoId}`}
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{snippet.title}</h4>
          <p>{snippet.description}</p>
        </div>
      </>
    );
  }
  return element;
};

const VideoDetail = ({ video }) => {
  return <div className="video-detail">{renderVideoDetails(video)}</div>;
};

export default VideoDetail;
