import React from "react";
import { useRouter } from 'next/router'


export const SearchBar = ({ loading = "false" }) => {
  let router = useRouter();

  const getSearch = async (e, second) => {
    if (e.code === "Enter" || e.keyCode === 13 || second === "search") {
      let title = document.getElementById("nav_search").value;
      if (title === "" || title === " ") {
        document.getElementById("nav_search").placeholder = "required";
      } else {
        router.push(`/search/${title.replace(/ /g, "-")}`);
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
