import React from "react";
import { useAppContext } from "../context/context";

const SearchForm = () => {
  const { query, handleSearch } = useAppContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search Hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      ></input>
      <button onClick={() => handleSearch("")}>Reset</button>
    </form>
  );
};
export default SearchForm;
