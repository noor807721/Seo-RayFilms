import Link from "next/link";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Card from "./Card";

function Slider({ hedding, data }) {
  return (
    <>
      <div className="title">
        <div className="hedding">
          <span>{hedding}</span>
        </div>
        <div className="icons h6">
          <div className="count_movie">
            <Link href={`/genre/${hedding}?page=1`}>
              <span className="see-all">SEE ALL</span>
            </Link>
          </div>
          <div className="arrow d-flex">
            <div className="fas">
              <FaCaretLeft />
            </div>
            <div className="fas">
              <FaCaretRight />
            </div>
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
