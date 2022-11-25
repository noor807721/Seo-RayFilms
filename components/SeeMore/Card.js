import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  const { imdbId,title, poster_path, release_date, vote_average } = data;
  let slug = `/details/${imdbId}/${title.replace(/ /g, "-")}`;
  return (
    <>
      <Link to={slug} style={{ textDecoration: "none" }}>
        <div className="Card">
          <div className="thumbnail">
            <img src={poster_path} alt={title} width="150"></img>
          </div>
          <div className="movie_data">
            <div className="movie_details">
              <p className="movie_name text-truncate">{title}</p>
              <p className="movie_year">{release_date.slice(0, 4)}</p>
            </div>
          </div>
          <div className="rating">
            <span>
              <i className="fas fa-star"> </i> {vote_average}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Card;
