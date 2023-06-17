import React from "react";
import "./Searchbox.scss";

const Searchbox = ({ searchTerm, handleInput }) => {
return (
<form className="search-box">
<label className="search-box__label">Search by name:</label>
<input
     type="text"
     value={searchTerm}
     onChange={handleInput}
     className="search-box__input"
   />
</form>
);
};

export default Searchbox;