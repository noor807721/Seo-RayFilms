import Link from "next/link";
import { FaHome ,FaUser,FaSearch} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMovie2Fill } from "react-icons/ri";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="hamburger">
        <GiHamburgerMenu id="hamIcon" />
      </div>
      <div className="logo">
        <Link href="/" className="Title">
          RayFilms
        </Link>
      </div>
      <div className="show_menu">
        <ul className="main_menu_items">
          <li>
            <Link href="/">
              <FaHome className="menu-iconx" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <RiMovie2Fill className="menu-iconx" />
              <span>Animation</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <RiMovie2Fill className="menu-iconx" />
              <span>Hollywood</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <RiMovie2Fill className="menu-iconx" />
              <span>Bollywood</span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <RiMovie2Fill className="menu-iconx" />
              <span>South</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="SearchBar">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            id="nav_search"
            autoComplete="off"
            required
          ></input>
          <div className="left_icon">
            <FaSearch />
          </div>
        </div>
      </div>
      <div className="Profile">
        <FaUser
          className="fas fa-user-circle logo"
          data-toggle="collapse"
          data-target="#submenu"
        />
      </div>
      {/* <Modal /> */}
    </div>
  );
}
export default Navbar;
