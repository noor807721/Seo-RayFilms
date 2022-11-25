import React from "react";
import { useHistory } from "react-router";

const SearchInput = ({ results }) => {
  let history = useHistory();
  const getSearch = async (e, second) => {
    if (e.code === "Enter" || e.keyCode === 13 || second === "search") {
      let title = document.getElementById("Search_Page_Value").value;
      if (title === "" || title === " ") {
        document.getElementById("Search_Page_Value").placeholder = "required";
      } else {
        history.push(`/search/${title.replace(/ /g, "-")}`);
      }
    }
  };
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          id="Search_Page_Value"
          autoComplete="off"
          onKeyDown={(e) => getSearch(e)}
        />
        <button
          type="submit"
          className="searchButton"
          onClick={(e) => getSearch(e, "search")}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="px-1 mt-3">
        <h6>
          Results Found:- <i className="h6">{results.length}</i>
        </h6>
        <hr />
      </div>
    </div>
  );
};

export default SearchInput;
