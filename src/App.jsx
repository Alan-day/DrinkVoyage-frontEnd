import React, { useEffect, useState } from "react";
import AlcoholCardsList from "./Components/AlcoholCardsList/AlcoholCardsList";
import data from "./Resources/beers.js";
import Button from "./Components/Button/Button";

function App() {
  const [alcoholList, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const url = "http://localhost:8080/list";
      const result = await fetch(url);
      const list = await result.json();
      setList(list);
    };

    getList();
  }, []);

  return (
    <div className="App">
      {<AlcoholCardsList data={alcoholList} />} <Button />
    </div>
  );
}

export default App;
n