import Link from "next/link";
import { DarkMode } from "../../action/internal";
import { Menu } from "../../action/internal";
import SideNav from "./SideNav";
// icons 
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMovie2Fill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";
import { FaSearch,FaMusic,FaUserCircle} from "react-icons/fa";
// botom Icon 
import {BiCategory} from "react-icons/bi";

function Navbar() {
  let list = ["Animation", "Hollywood", "Bollywood", "South"];
  return (
    <div className="Navbar">
      <div className="hamburger" onClick={Menu}>
        <GiHamburgerMenu id="hamIcon" />
      </div>
      <SideNav />
      <div className="logo">
        <Link href="/" className="Title">
          RayFilms
        </Link>
      </div>
      <div className="show_menu">
        <ul className="main_menu_items">
          <li>
            <Link href="/">
              <HiHome className="menu-iconx" />
              <span>Home</span>
            </Link>
          </li>
          {list.map((title, i) => {
            return (
              <li key={i}>
                <Link href={`/genre/${title}?page=1`}>
                  <RiMovie2Fill className="menu-iconx" />
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <SearchBar /> */}
      <div className="Profile">
        <FaUserCircle
          className="logo"
          data-toggle="collapse"
          data-target="#submenu"
        />
        <ul className="sub-menu collapse" id="submenu">
          <Link href="/profile">
            <li className="item">
              <i className="fas fa-user-circle"></i>
              <span>Profile</span>
            </li>
          </Link>
          <li className="item" onClick={DarkMode} id="light-mode">
            <i className="fas fa-moon"></i>
            <span>Dark</span>
          </li>
          <li className="item">
            <i className="fas fa-arrow-right-from-bracket"></i>
            <span>logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;


export const BotNav = () => {
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
          <Link href={"/genre/categoris"}>
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
