import React, { useEffect, useState } from "react";
import AlcoholCardsList from "./Components/AlcoholCardsList/AlcoholCardsList";
import Searchbox from "./Components/Searchbox/Searchbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import WelcomeBanner from "./Components/WelcomeBanner/WelcomeBanner";
import CreateAlcoholCard from "./Components/CreateAlcoholCard/CreateAlcoholCard";

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
        <WelcomeBanner/>
      <Navbar />
      <Searchbox
                    handleInput={handleSearch}
                    searchTerm={searchTerm}
                  />
        <div className="card-container">
    
          <Routes>
            <Route
              path="/"
              element={
                <>
            
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
