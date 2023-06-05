import React, { useEffect, useState } from "react";
import AlcoholCardsList from "./Components/AlcoholCardsList/AlcoholCardsList";
import data from "./Resources/beers.js";
import Button from "./Components/Button/Button";
import Searchbox from "./Components/Searchbox/Searchbox";

function App() {
  const [alcoholList, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getList = async () => {
      const url = "http://localhost:8080/list";
      const result = await fetch(url);
      const list = await result.json();
      setList(list);
    };

    getList();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredAlcohol = alcoholList.filter((alco) => {
    const alcoholToLower = alco.name.toLowerCase();

    return alcoholToLower.includes(searchTerm);
  });
  console.log(filteredAlcohol);
  console.log(searchTerm);
  return (
    <div className="App">
      <Searchbox handleSubmit={handleSearch} value={searchTerm} />
      <AlcoholCardsList data={filteredAlcohol} />
    </div>
  );
}

export default App;
