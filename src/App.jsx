import React, { useEffect, useState } from "react";
import AlcoholCardsList from "./Components/AlcoholCardsList/AlcoholCardsList";
import Searchbox from "./Components/Searchbox/Searchbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAlcoholCard from "./Components/CreateAlcoholCard/CreateAlcoholCard";
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
        <div className="card-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Searchbox
                    handleInput={handleSearch}
                    searchTerm={searchTerm}
                  />
                  <AlcoholCardsList data={filteredAlcohol} />
                </>
              }
            />

            <Route path="/createDrink" element={<CreateAlcoholCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
