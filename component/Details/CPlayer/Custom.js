import React from "react";
import  Link  from "next/link";
import {  useRouter } from "next/router";
import { movieIsready } from "../../../action/player";
const Custom = () => {
    let router = useRouter();
    return (
      <div id="CustomPlyr">
        <video
          preload="metadata"
          id="main-video"
          className="player"
          onLoadStart={movieIsready}
        >
          <source src={"movie"} size="480" type="video/mp4" />
        </video>
        <div className="videoInformation">
          <div>
            <i className="fa-solid fa-arrow-left" onClick={() => {}}></i>
            <span>Uncharted 2021 in hindi movie download</span>
          </div>
          <div>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
        <div className="middleControls">
          <div className="left">
            <i
              className="fa fa-volume-high d-block"
              id="muteMovie"
              type="button"
              data-placement="top"
              title="mute"
            ></i>
            <i className="fa fa-lock"></i>
          </div>
          <div className="right">
            <i className="fa fa-rectangle-wide d-block"></i>
            <Link href="/">
              <i className="fa fa-cloud-arrow-down"></i>
            </Link>
          </div>
        </div>
        <div className="bottomControls">
          <div className="userControls">
            <span id="currentDuration">00:00:00 </span>
            <div id="progressArea">
              <div className="progressAreaBar">
                <div id="progressAreaTime"></div>
              </div>
            </div>
            <span id="totalDuration"> 00:00:00</span>
          </div>
          <div className="actionBar">
            <div className="left">
              <i
                className="fa fa-play"
                type="button"
                data-placement="top"
                title="click to play"
              ></i>
              <i
                className="fa fa-backward-step fastRewind"
                type="button"
                data-placement="top"
                title="rewind"
              ></i>
              <i
                className="fa fa-forward-step fastForward"
                type="button"
                data-placement="top"
                title="forward"
              ></i>
            </div>
            <div className="right">
              <i
                className="fa fa-solid fa-gear"
                type="button"
                data-placement="top"
                title="setting"
              ></i>
              <i id="videoFull" className="fa-sharp fa-solid fa-expand"></i>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Custom;