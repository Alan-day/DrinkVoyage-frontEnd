import React, { useEffect, useState } from "react";

import AlcoholCardsList from "./Components/AlcoholCardsList/AlcoholCardsList";

function App() {


  const [alcoholList, setList] = useState([]);

  const getList = async () => {
    const url = "http://localhost:8080/list";
    const result = await fetch(url);
    const list = await result.json();
    setList(list);
  };

  console.log(alcoholList);

  useEffect(() => {
    getList();
  }, []);

  return <div className="App">
    
    <AlcoholCardsList alcoholList={alcoholList}/>
  </div>;
}

export default App;

