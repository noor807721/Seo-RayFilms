import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
            {slidebtn && (
              <Link href={`/${hedding}/${page}/${limit}/${short}`}>
                <span className="see-all">SEE ALL</span>
              </Link>
            )}
          </div>
          {slidebtn && (
            <div className="arrow">
              <span>
                <FaArrowLeft />
              </span>
              <span>
                <FaArrowRight />
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SliderHed;
