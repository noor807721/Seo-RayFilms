import Link from "next/link";
import { FaStar } from "react-icons/fa";

function Card({ data }) {
  const {imdbId, poster_path, title, release_date, vote_average } = data;
  let slug = `/details/${imdbId}/${title.replace(/ /g, "-")}`;

  return (
    <>
      <Link href={slug } style={{ textDecoration: "none" }}>
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
              <FaStar /> {vote_average}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Card;
