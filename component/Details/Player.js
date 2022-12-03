import React from "react";
// import YouTube from "./CPlayer/YouTube";
// import Custom from "./CPlayer/Custom";
// import Plyr from "./CPlayer/Plyr";
import Embed from "./CPlayer/Embed";
// let playerImg = "https://2embed.org/themes/pirate/images/icons/play-white.png";

function VideoPlayer({ data }) {
  const { title, views, doodstream } = data;
  return (
    <>
      <div className="Player_Container">
        <Embed stream={doodstream}/>
        {/* <Custom /> */}
        {/* <YouTube /> */}
        {/* <Plyr /> */}
      </div>
      <Settings title={title} views={views} />
    </>
  );
}
export default VideoPlayer;
const Settings = ({ title, views }) => {
  return (
    <div className="settings">
      <h6>{title}</h6>
      <div className="views">
        <span
          className="mr-2 see-all py-1"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="fa fa-exclamation-triangle"></i>&nbsp;Report
        </span>
        <span>{views} views</span>
      </div>
    </div>
  );
};


