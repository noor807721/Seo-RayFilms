import React from "react";
import { info, download } from "../../action/internal";

function Card({ data }) {
  const { filmindustry, title, poster_path, release_date, vote_average, views, genres, like,
  } = data;

  return (
    <>
      <div className="details_card">
        <div className="thumbnail">
          <img src={poster_path} alt={title} width="150" />
        </div>
        <div className="movie_detail">
          <h1 className="h5">{title}</h1>
          <span>{release_date.slice(0, 4)}</span>
          <div className="genres-type">
            {genres.map((res, i) => {
              return <li key={i}>{res}</li>;
            })}
          </div>
        </div>
      </div>
      <div className="more_details">
        <div className="item">
          <i className="fas fa-star" aria-hidden="true"></i>
          <span> Rating</span>
          <span className="d-block">{vote_average}</span>
        </div>
        <div className="item">
          <i className="fas fa-thumbs-up" aria-hidden="true"></i>
          <span> Like</span>
          <span className="d-block">{like}</span>
        </div>
        <div className="item">
          <i className="fas fa-eye" aria-hidden="true"></i>
          <span> Views</span>
          <span className="d-block">{views}</span>
        </div>
        <div className="item">
          <span>Type</span>
          <span className="d-block">{filmindustry}</span>
        </div>
      </div>
      <div className="content_changer">
        <button className="btn btn-info" onClick={info}>
          Information
        </button>
        <button className="btn btn-info" onClick={download}>
          Links
        </button>
      </div>
    </>
  );
}
export default Card;
