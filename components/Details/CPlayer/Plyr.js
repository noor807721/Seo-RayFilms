import React from "react";

const Plyr = () => {
  return (
    <video id="player" controls data-poster="/path/to/poster.jpg">
      <source src="/path/to/video.mp4" type="video/mp4" />
     <source src="/path/to/video.webm" type="video/webm" />
    </video>
  );
};

export default Plyr;
