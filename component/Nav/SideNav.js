import React from "react";
import  Link  from "next/link";
import { categories } from "../../static/content";

const SideNav = () => {
  return (
    <div className="SideNavbar" id="sidePannel">
      <ul className="items">
        <li className="fs-item mb-2">
          <div className="users d-flex">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt=""
              width={65}
              height={65}
              className="rounded circle"
            />
            <h5 className="mt-4 px-2">Log In</h5>
          </div>
        </li>
        <li>
          <Link href="/">
            <label>
              <i className="fas fa-home">&nbsp; Home</i>
            </label>
          </Link>
        </li>
        <li>
          <label data-toggle="collapse" href="#movieindustry">
            <i className="fa fa-clapperboard">&nbsp; Movies</i>
            <span>
              <i className="fas fa-caret-down"></i>
            </span>
          </label>
          <ul className="collapse" id="movieindustry">
            <li>
              <Link href="/Animation/1/9/1">Animation</Link>
            </li>
            <li>
              <Link href="/Hollywood/1/9/1">Hollywood</Link>
            </li>
            <li>
              <Link href="/Bollywood/1/9/1">Bollywood</Link>
            </li>
            <li>
              <Link href="/South/1/9/1">South</Link>
            </li>
          </ul>
        </li>
        <li>
          <label data-toggle="collapse" href="#genrestype">
            <i className="fa fa-icons">&nbsp; Genres</i>
            <span>
              <i className="fas fa-caret-down"></i>
            </span>
          </label>
          <ul className="collapse" id="genrestype">
            {categories.map((res, i) =>  i < 5 &&
               (
                <li key={i}>
                  <Link href={`/${res[i]/1/9/-1}`}>
                    {res[i]}
                  </Link>
                </li>
              )
            )}
          </ul>
        </li>
        <li className="ls-item">
          <a href="https://telegram.me/IMDBHDFILM" target="blank">
            <label>Join Telegram</label>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SideNav;
