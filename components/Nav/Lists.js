import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

export function Lists() {
  return (
    <>
      <ul className="main_menu_items">
        <Items
          icon={"fas fa-home"}
          bgColor={"#009688"}
          title={"Home"}
          url={"/"}
        />
        <Items
          icon={"fas fa-video"}
          bgColor={"#ffc107"}
          title={"Hollywood"}
          url={"/Hollywood/1/9/1"}
        />
        <Items
          icon={"fas fa-video"}
          bgColor={"#2196f3"}
          title={"Animation"}
          url={"/Animation/1/9/1"}
        />
        <Items
          icon={"fas fa-video"}
          bgColor={"#8bc34a"}
          title={"Bollywood"}
          url={"/Bollywood/1/9/1"}
        />
        <Items
          icon={"fas fa-video"}
          bgColor={"#f44336"}
          title={"South"}
          url={"/South/1/9/1"}
        />
      </ul>
    </>
  );
}

function Items(props) {
  const { icon, bgColor, title, url } = props;
  return (
    <li>
      <NavLink to={url}>
        <i className={`${icon} menu-iconx`} style={{ background: bgColor }}></i>
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

export const SearchBar = ({ loading = "false" }) => {
  let history = useHistory();

  const getSearch = async (e, second) => {
    if (e.code === "Enter" || e.keyCode === 13 || second === "search") {
      let title = document.getElementById("nav_search").value;
      if (title === "" || title === " ") {
        document.getElementById("nav_search").placeholder = "required";
      } else {
        history.push(`/search/${title.replace(/ /g, "-")}`);
      }
    }
  };

  return (
    <>
      <div className="SearchBar">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            id="nav_search"
            autoComplete="off"
            onKeyDown={(e) => getSearch(e)}
            required
          ></input>
          <div className="left_icon" onClick={(e) => getSearch(e, "search")}>
            {loading ? (
              <i className="fas fa-search"></i>
            ) : (
              <div
                className="spinner-border text-success spinner-border-sm"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
