import { useRouter } from "next/router";
// import Hedding from "../component/SeeMore/Hedding";
// import See from "../component/SeeMore/See";
import Card from "../../component/Home/Card";
import { getGenre } from "../../action/home";

function Genre({ data }) {
  const router = useRouter();
  return (
    <div className="SeeMore_Page">
      <div className="Hedding text-center">
        <hr className="line1" />
        <h1>{router.query.title}</h1>
        <hr className="line2" />
      </div>
      <div className="CardColumn">
        {data.data.map((res, i) => {
          return <Card data={res} key={i} />;
        })}
      </div>
      <div className="pagination">
        <button className="btn btn-secondary">Load More</button>
      </div>
    </div>
  );
}
export const getServerSideProps = async (contex) => {
  const { title, page } = contex.query;
  const data = await getGenre({ title, page });
  return {
    props: {
      data,
    },
  };
};
export default Genre;
