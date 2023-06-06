import React, { useEffect, useState } from "react";
import AlcoholCardsList from "./Components/AlcoholCardsList/AlcoholCardsList";
import Searchbox from "./Components/Searchbox/Searchbox";

function App() {
  const [alcoholList, setAlcoholList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getList = async () => {
    const url = "http://localhost:8080/list";
    const result = await fetch(url);
    const list = await result.json();
    setAlcoholList(list);
  };

  useEffect(() => {
    getList();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAlcohol = alcoholList.filter((alco) => {
    const alcoholToLower = alco.name.toLowerCase();
    return alcoholToLower.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <Searchbox handleInput={handleSearch} searchTerm={searchTerm} />
      <AlcoholCardsList data={filteredAlcohol} />
    </div>
  );
}

export default App;
