import React from "react";
let telegram_logo =
  "https://2embed.org/themes/pirate/images/icons/svg/telegram.svg";

const Information = ({ data }) => {
  const { release_date, overview, vote_average, genres,d_480p, d_720p } = data;

  let screen = [1, 2, 3];
  return (
    <>
      <div className="DwdLink" id="dwd-link">
        <h4>Download Link</h4>
        <ul className="download_btn">
          <a href={d_480p} target="_blank" rel="noopener noreferrer">
            <li>Download Now 480p</li>
          </a>
          <a href={d_720p} target="_blank" rel="noopener noreferrer">
            <li>Download Now 720p</li>
          </a>
        </ul>
      </div>
      <div className="Information" id="movie-info">
        <h4>Screenshot</h4>
        <div className="Screen_shot mb-2">
          <div className="show_imgs">
            {screen.map((res, i) => {
              return (
                <div className="Card" key={i}>
                  <img
                    src="https://thumbs.dreamstime.com/b/blue-hole-white-paper-coming-soon-144390612.jpg"
                    className="responsive"
                    alt="Fetching"
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
        <div className="details">
          <p>
            <span className="h5">Story line:- </span>
            {overview}
          </p>
          <p className="d-inline">IMDB Rate: </p>
          <h5 className="badge badge-warning h3">{vote_average}</h5>
          <p>
            Genres:
            <span className="text-info">
              {genres.map((res, i) => {
                return res + ", ";
              })}
            </span>
          </p>
          <p>
            Year: <span className="text-info">{release_date}</span>
          </p>
          <p>
            Language: <span className="text-info">Hindi</span>
          </p>
          <p>
            Run Time: <span className="text-info">N/A</span>
          </p>
        </div>
      </div>
      <a
        href="https://telegram.me/IMDBHDFILM"
        target="blank"
        className="telegram"
      >
        <div className="card d-flex">
          <img src={telegram_logo} alt="telegram" width="55" />
          <div className="details ml-2">
            <h4>Join us on Telegram</h4>
            <p className="text-info">t.me/IMDBHDFILM</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Information;
