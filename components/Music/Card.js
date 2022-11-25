import React from "react";

const Card = () => {
  return (
    <div className="music-Card">
      <div className="thumbnail">
        <img src={"https://image.tmdb.org/t/p/w500/4hqtjslVCaDVgblg7iCtGIy7exO.jpg"} alt={"h"} />
      </div>
      <div className="puesto">{1}</div>
      <div className="rating">{4.4}</div>
      <div className="titles text-truncate">{"tabula"}</div>
    </div>
  );
};

export default Card;
