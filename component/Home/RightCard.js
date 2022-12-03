import React from "react";
import  Link  from "next/link";
// import Card from './Card';
import SliderHed from "./SliderHed";
import Spinner from "../Nav/Spinner";


function RightCard() {
  let South = [];
  return (
    <>
      <div className="Side_Card">
      <SliderHed type="danger" slidebtn="true" hedding="South" page="1" limit="9" short="1"/>
      <hr />
        {South.map((res, i) => {
          return <Card data={res} key={i} />;
        })}
        {South.length === 0 && <Spinner />}
      </div>
    </>
  );
}
export default RightCard;



export function Card({data}) {
      const { imdbId,title, poster_path,release_date, vote_average } = data;
      let slug = `/details/${imdbId}/${title.replace(/ /g,'-')}`;
      return (
        <>
          <Link href={slug} style={{ textDecoration: "none" }} >
            <div className="RightPannelCard text-dark">
              <div className="thumbnail">
                <img src={poster_path} alt={title} />
              </div>
              <div className="movie_detail">
                <h6>{title}</h6>
                <div>
                  <span className="badge badge-secondary p-1">
                    <i className="fas fa-star "></i> {vote_average}
                  </span>
                  <span className="px-2 h6">{release_date.slice(0,4)}</span>
                </div>
              </div>
            </div>
          </Link>
        </>
      );
    }
