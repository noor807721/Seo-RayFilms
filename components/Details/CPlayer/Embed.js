import React from "react";

const Embed = ({stream}) => {
  return (
    <iframe
      className="video_frame hide"
      title="Stream Player"
      src={stream}
      allow="autoplay"
      scrolling="no"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default Embed;
