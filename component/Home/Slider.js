import  Link  from "next/link";
import Card from "./Card";


function Slider({hedding,data}) {

  
  return (
    <>
      <div className="title">
        <div className="hedding">
          <span>{hedding}</span>
        </div>
        <div className="icons h6">
          <div className="count_movie">
            <Link href={`/${hedding}/1/6/-1`}>
              <span className="see-all">SEE ALL</span>
            </Link>
          </div>
          <div className="arrow">
            <i className="fas fa-caret-left"></i>
            <i className="fas fa-caret-right"></i>
          </div>
        </div>
      </div>
      <hr />
      <div className="Main_Slider mt-3">
        {data.data.map((res, i) => {
          return <Card data={res} key={i} />;
        })}
      </div>
    </>
  );
}
export default Slider;
