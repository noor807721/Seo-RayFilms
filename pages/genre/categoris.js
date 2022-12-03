import Link from 'next/link';
import { categories } from "../../asset/var/categories";

const Categoris = () => {
  return (
      <div className="Categoris_Page">
        <div className="alert alert-warning" role="alert">
          This functionality didn't work at this time!
        </div>
        <div className="list">
          {categories.map((res, i) => {
            return (
              <Link href={"/"+res[i]+"/1/9/-1"} key={i}>
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
