import React from "react";
import { playPauseBtn } from "../../actions/script";
import pasoori from '../asset/songs/pasoori.mp3'
let thumbnail =
  "https://a10.gaanacdn.com/gn_img/albums/d41WjnWPLq/1WjznpV5WP/size_l.jpg";

const Player = () => {
  return (
    <div className="wrapper">
      <div className="top-bar">
        <i className="material-icons">expand_more</i>
        <span>Now Playing</span>
        <i className="material-icons">more_horiz</i>
      </div>
      <div className="img-area">
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className="song-details">
        <p className="name"></p>
        <p className="artist"></p>
      </div>
      <div className="progress-area">
        <div className="progressBar">
          <audio id="main-audio" src={pasoori}></audio>
        </div>
        <div className="song-timer">
          <span className="current-time">0:00</span>
          <span className="max-duration">0:00</span>
        </div>
      </div>
      <div className="controls">
        <i id="repeat-plist" className="material-icons" title="Playlist looped">
          repeat
        </i>
        <i id="prev" className="material-icons">
          skip_previous
        </i>
        <div className="play-pause" onClick={playPauseBtn}>
          <i className="material-icons play">play_arrow</i>
        </div>
        <i id="next" className="material-icons">
          skip_next
        </i>
        <i id="more-music" className="material-icons">
          queue_music
        </i>
      </div>
      <div className="music-list">
        <div className="header">
          <div className="row">
            <i className="list material-icons">queue_music</i>
            <span>Music list</span>
          </div>
          <i id="close" className="material-icons">
            close
          </i>
        </div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Player;
