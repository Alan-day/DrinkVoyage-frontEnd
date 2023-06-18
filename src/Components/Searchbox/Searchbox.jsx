import React from "react";
import "./Searchbox.scss";

const Searchbox = ({ searchTerm, handleInput, setWine, setBeer, setRakia, setVodka, setWhiskey, setOther }) => {
return (
  <>
<form className="search-box">
<label className="search-box__label">Search by name:</label>
<input
     type="text"
     value={searchTerm}
     onChange={handleInput}
     className="search-box__input"
   />
</form>

<div className="search-box__selection">

<label>
    Wine
        <input type="checkbox" value="wine" onChange={setWine}></input>
      </label>

      <label>
       Whiskey
        <input type="checkbox" value="whiskey" onChange={setWhiskey}></input>
      </label>

      <label>
        Vodka
        <input type="checkbox" value="vodka" onChange={setVodka}></input>
      </label>

      <label>
         Beer
        <input type="checkbox" value="beer" onChange={setBeer}></input>
      </label>


      <label>
        Rakia/Rakija
        <input type="checkbox" value="rakia" onChange={setRakia}></input>

      </label>


      <label>
        Other
        <input type="checkbox" value="other" onChange={setOther}></input>

      </label>




</div>


</>

);
};

export default Searchbox;