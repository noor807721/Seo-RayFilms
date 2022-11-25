import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getSee } from "../../Redux/Info/Seemore";
import Spinner from "../Navbar/Spinner";
import Card from "./Card";

function See() {
  const param = useParams();
  const history = useHistory();

  const { type, page, limit, short } = param;
  let dispatch = useDispatch();
  const { data, loading, msg } = useSelector((state) => state.Seemore);
  const Next = (load) => {
    history.push(`/${type}/${load}/${limit}/${short}`);
  };
  const Previous = (load) => {
    history.push(`/${type}/${load}/${limit}/${short}`);
  };

  useEffect(() => {
      dispatch(getSee(history.location.pathname));
  }, [param]);
  return (
    <>
      <div className="seeMore">
        <div className="ShowingCard">
          {loading && <Spinner msg={msg} />}
          {data.map((res, i) => {
            return <Card data={res} key={i} />;
          })}
        </div>
        <div className="pagination">
          <button
            className="btn btn-secondary"
            disabled={parseInt(page) === 1}
            onClick={() => Previous(parseInt(page) - 1)}
          >
            Previous
          </button>
          <button
            disabled={data.length !== 9}
            className="btn btn-secondary ml-3"
            onClick={() => Next(parseInt(page) + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default See;

