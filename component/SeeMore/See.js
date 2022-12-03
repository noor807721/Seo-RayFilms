import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'
import { getSee } from "../../Redux/Info/Seemore";
import Spinner from "../Nav/Spinner";
import Card from "../Home/Card";

function See() {
  const param = useParams();
  const router = useRouter();

  const { type, page, limit, short } = param;
  let dispatch = useDispatch();
  const { data, loading, msg } = useSelector((state) => state.Seemore);
  const Next = (load) => {
    router.push(`/${type}/${load}/${limit}/${short}`);
  };
  const Previous = (load) => {
    router.push(`/${type}/${load}/${limit}/${short}`);
  };

  useEffect(() => {
      dispatch(getSee(router.location.pathname));
  }, [param]);
  return (
    <>
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
    </>
  );
}

export default See;

