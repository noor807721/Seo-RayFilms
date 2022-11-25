import React from "react";
import Link from "next/link";
const API = process.env.REACT_APP_API;

function Carousel({latest}) {
  return (
    <>
      <div className="Carousel">
        {/* {loading && <Spinner/>} */}
        {latest.map((res, key) => {
          const { imdbId, filmindustry, title, poster_path, release_date } =
            res;
          let slug = `/details/${imdbId}/${title.replace(/ /g, "-")}`;
          return (
            <Link href={{ pathname: slug }} key={key}>
              <div className="show_imgs" id="slide">
                <div className="Card">
                  <img
                    src={poster_path}
                    alt={title}
                    width="280"
                    height="185"
                  ></img>
                  <div className="movie_details">
                    <p className="movie_name text-truncate">{title}</p>
                    <p className="movie_year">{release_date.slice(0, 4)}</p>
                  </div>
                  <div className="genres">
                    <span>{filmindustry}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Carousel;
