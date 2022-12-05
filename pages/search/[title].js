import { useRouter } from "next/router";
import Seo from "../../component/SeeMore/Seo";
import Card from "../../component/Home/Card";
import { FaSearch } from "react-icons/fa";
import { getSearch } from "../../action/home";
import { description } from "../../static/content";
function Search({ data }) {
  const router = useRouter();
  const getTitle = async (e) => {
    if (e.code === "Enter" || e.keyCode === 13 || e.type === "click") {
      let search = document.getElementById("searching").value;
      if (search === "" || search === " ") {
      } else {
        router.push(`/search/${search.replace(/ /g, "-")}`);
      }
    }
  };
  return (
    <div className="Search_Page">
      <Seo Title={`Search Result for "${router.query.title}" - RayFilms`} Desc={description}/>
      <div className="searchBar">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
            id="searching"
            autoComplete="off"
            onKeyDown={getTitle}
          />
          <button className="searchButton" type="submit" onClick={getTitle}>
            <FaSearch />
          </button>
        </div>
        <div className="px-1 mt-3">
          <h6>
            Results Found:- <i className="h6">{data.length}</i>
          </h6>
          <hr />
        </div>
      </div>
      <div className="CardColumn">
        {data &&
          data.map((res, i) => {
            return <Card data={res} key={i} />;
          })}
      </div>
    </div>
  );
}
export const getServerSideProps = async (contex) => {
  let title = contex.query.title;
  const data = await getSearch(title.replace(/-/g," "));
  return {
    props: { data },
  };
};
export default Search;
