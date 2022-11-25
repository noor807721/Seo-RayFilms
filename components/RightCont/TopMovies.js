import Link from 'next/link'

function TopMovies() {
let data = [];  
  return (
    <>
      <div className="TopMovies">
        {data.map((data, i) => {
          const {imdbId, title, poster_path,vote_average } = data;
          let slug = `/details/${imdbId}/${title.replace(/ /g, "-")}`;
          return (
            <Link
              href={slug}
              style={{ textDecoration: "none" }}
              key={i}
            >
              <div className="TopCard">
                <div className="thumbnail">
                  <img src={poster_path} alt={title} />
                </div>
                <div className="puesto">{++i}</div>
                <div className="rating">{vote_average}</div>
                <div className="titles text-truncate">{title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default TopMovies;

