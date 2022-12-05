import Link from "next/link";
import Seo from '../../component/SeeMore/Seo';
import {description, categories } from "../../static/content";

const Categoris = () => {
  return (
    <div className="Categoris_Page">
      <Seo Title={"Categoris | RayFilms"} Desc={description} />
      <div className="alert alert-warning" role="alert">
        This functionality didn't work at this time!
      </div>
      <div className="list">
        {categories.map((res, i) => {
          return (
            <Link href={`/genre/${res[i]}?page=1`} key={i}>
              <div className="items">
                <img src={res["icon"]} alt="loading" className="px-2" />
                <span className="px-4">{res[i]}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categoris;
