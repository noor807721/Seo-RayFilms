import Player from "../../../component/Details/Player";
import Card from "../../../component/Details/Card";
import Information from "../../../component/Details/Information";
import Comment from "../../../component/Details/Comment";
import { getDetails } from "../../../action/home";

function Details({data}) {
  return (
    <>
      <div className="Details_Page">
        <Player data={data} />
        <div className="movies_info">
          <Card data={data} />
          <Information data={data} />
          <Comment />
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
    const {imdbId} = context.query;
  const data = await getDetails(imdbId);
  return {
    props: {
      data,
    },
  };
}
export default Details;
