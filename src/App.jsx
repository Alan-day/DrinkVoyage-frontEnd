import React, { useEffect, useState } from "react";

import AlcoholCardsList from "./Components/AlcoholCardsList/AlcoholCardsList";
import data from "./Resources/beers.js";
function App() {
  const [alcoholList, setList] = useState(data);

  // const getList = async () => {
  //   const url = "http://localhost:8080/list";
  //   const result = await fetch(url);
  //   const list = await result.json();
  //   setList(list);
  // };

  // useEffect(() => {
  //   getList();
  // }, []);
  console.log( data);

  return <div className="App">{<AlcoholCardsList />}</div>;
}

export default App;
