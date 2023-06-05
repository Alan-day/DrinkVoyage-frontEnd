import React from "react";
import "./Searchbox.scss";

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <form className="search-box">
      <label h className="search-box__label"></label>
      <input
        type="text"
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;
