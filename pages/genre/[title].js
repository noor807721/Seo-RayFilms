import { useRouter } from "next/router";
import Seo from '../../component/SeeMore/Seo';
import {description} from "../../static/content"
import Card from "../../component/Home/Card";
import { getGenre } from "../../action/home";

function Genre({ data }) {
  const router = useRouter();
  const { title, page } = router.query;
  let query = parseInt(page);
  const Next = (page) => {
    router.push(`/genre/${title}?page=${page}`);
  };

  return (
    <div className="SeeMore_Page">
      <Seo Title={title+" | "+"RayFilms"} Desc={description}/>
      <div className="Hedding text-center">
        <hr className="line1" />
        <h1>{title}</h1>
        <hr className="line2" />
      </div>
      <div className="CardColumn">
        {data.data.map((res, i) => {
          return <Card data={res} key={i} />;
        })}
      </div>
      <div className="pagination">
        <button
          disabled={query === 1}
          className="btn btn-secondary m-3"
          onClick={() => Next(parseInt(query - 1))}
        >
          Previous
        </button>
        <button
          disabled={data.total === 0}
          className="btn btn-secondary m-3"
          onClick={() => Next(parseInt(query + 1))}
        >
          Next
        </button>
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
