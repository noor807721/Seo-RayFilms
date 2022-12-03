import React from "react";
import  Link  from "next/link";

const SliderHed = (props) => {
  const { hedding, page, limit, short, slidebtn } = props;
  return (
    <>
      <div className="title">
        <div className="hedding">
          <span>{hedding}</span>
        </div>
        <div className="icons h6">
          <div className="count_movie">
            {/* <span className="count_movie px-2">3,4656</span> */}
            {slidebtn && <Link href={`/${hedding}/${page}/${limit}/${short}`}>
              <span className="see-all">SEE ALL</span>
            </Link>}
          </div>
          {slidebtn && <div className="arrow">
            <i className="fas fa-caret-left"></i>
            <i className="fas fa-caret-right"></i>
          </div>}
        </div>
      </div>
    </>
  );
};

export default SliderHed;
