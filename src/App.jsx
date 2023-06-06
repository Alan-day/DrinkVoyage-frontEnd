import React, { useEffect, useState } from "react";
import AlcoholCardsList from "./Components/AlcoholCardsList/AlcoholCardsList";
import Searchbox from "./Components/Searchbox/Searchbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";

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
    <Router>
      <div className="App">
        <Navbar />
        <Searchbox handleInput={handleSearch} searchTerm={searchTerm} />
        <div className="card-container">
          {/* 
do it in AlcoholCardList
        {alcoholList.map((card, index) => {
          return (
            <>
              <h3
                className="mobile-table-header"
                key={card.id + index}
              >
                Staff 0{card.category}
              </h3>
              {staff.resources.map((resource, index) => {
                return (
                  <MobileNavButton key={index} name={resource.resourceName} />
                );
              })}
            </>
          );
        })} */}
        </div>

        <Routes>
          {/* <Route path="/create" element={<CreateAlcoholCard />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
