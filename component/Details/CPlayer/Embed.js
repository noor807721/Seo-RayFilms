import React from "react";

const Embed = ({stream}) => {
  return (
    <iframe
      className="video_frame hide"
      title="Stream Player"
      src={stream}
      scrolling="no"
      loading="lazy"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default Embed;
