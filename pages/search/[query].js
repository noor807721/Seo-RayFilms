import {FaSearch} from "react-icons/fa"
function Search() {
  return (
    <div className="Search_Page">
      <div className="searchBar">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
            id="Search_Page_Value"
            autoComplete="off"
          />
          <button className="searchButton" type="submit">
            <FaSearch />
          </button>
        </div>
        <div className="px-1 mt-3">
          <h6>
            Results Found:- <i className="h6">{12}</i>
          </h6>
          <hr />
        </div>
      </div>
      <div className="pagination">
        <button className="btn btn-secondary" disabled>
          Previous
        </button>
        <button disabled className="btn btn-secondary ml-3">
          Next
        </button>
      </div>
    </div>
  );
}

export default Search;
