import Link from "next/link";
import { HiHome} from "react-icons/hi";
import { FaSearch,FaMusic,FaUserCircle} from "react-icons/fa";
import {BiCategory} from "react-icons/bi";

const BotNav = () => {
  return (
      <div className="bottom_menu">
        <div className="column">
          <Link href={"/"}>
            <div className="items">
              <HiHome />
              <h6>home</h6>
            </div>
          </Link>
          <Link href={"/search/query"}>
            <div className="items">
              <FaSearch />
              <h6>Search</h6>
            </div>
          </Link>
          <Link href={"/movies/categoris"}>
            <div className="items">
              <BiCategory />
              <h6>Categoris</h6>
            </div>
          </Link>
          <Link href={"/music"}>
            <div className="items">
              <FaMusic />
              <h6>Music</h6>
            </div>
          </Link>
          <Link href={"/profile"}>
            <div className="items" >
              <FaUserCircle />
              <h6>Profile</h6>
            </div>
          </Link>
        </div>
      </div>
  );
};

export default BotNav;
