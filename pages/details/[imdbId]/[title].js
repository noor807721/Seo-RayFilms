import Seo from "../../../component/SeeMore/Seo";
import Player from "../../../component/Details/Player";
import Card from "../../../component/Details/Card";
import Information from "../../../component/Details/Information";
import Comment from "../../../component/Details/Comment";
import { getDetails } from "../../../action/home";
let seo = ' Full Movie Download Filmyzilla 480p 720p 1080p HD ';

function Details({data}) {
  const {title,overview} = data;
  return (
    <>
    <Seo Title={title + seo} Desc={title.concat(seo,overview.slice(0,70))}/>
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
