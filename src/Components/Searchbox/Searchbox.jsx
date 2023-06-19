import React from "react";
import "./Searchbox.scss";

const Searchbox = ({
  searchTerm,
  handleInput,
  setWine,
  setBeer,
  setRakia,
  setVodka,
  setWhiskey,
  setOther,
}) => {
  return (
    <>
      <form className="search-box">
        <label className="search-box__label">Search by name: </label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInput}
          className="search-box__input"
        />
      </form>

      <div className="search-box__selection">
        
        <label className="item">
          Wine
          <input
            type="checkbox"
            value="wine"
            onChange={setWine}
          />
        </label>

        <label className="item">
          Whiskey
          <input
            type="checkbox"
            value="whiskey"
            onChange={setWhiskey}
          />
        </label>

        <label className="item">
          Vodka
          <input
            type="checkbox"
            value="vodka"
            onChange={setVodka}
          />
        </label>

        <label className="item">
          Beer
          <input
            type="checkbox"
            value="beer"
            onChange={setBeer}
          />
        </label>

        <label className="item">
          Rakia/Rakija
          <input
            type="checkbox"
            value="rakia"
            onChange={setRakia}
          />
        </label>

        <label className="item">
          Other
          <input
            type="checkbox"
            value="other"
            onChange={setOther}
          />
        </label>
      </div>
    </>
  );
};

export default Searchbox;
