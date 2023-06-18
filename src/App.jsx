import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlcoholCardsList from "./Components/AlcoholCardsList/AlcoholCardsList";
import Searchbox from "./Components/Searchbox/Searchbox";
import Navbar from "./Components/Navbar/Navbar";
import WelcomeBanner from "./Components/WelcomeBanner/WelcomeBanner";
import CreateAlcoholCard from "./Components/CreateAlcoholCard/CreateAlcoholCard";
import EditAlcoholCard from "./Components/EditAlcoholCard/EditAlcoholCard";
import "./App.scss";

function App() {
  const [alcoholList, setAlcoholList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getList();
  
  }, []);

  const getList = async () => {
  
      const url = "http://localhost:8080/list";
      const response = await fetch(url);
      const list = await response.json();
      setAlcoholList(list);
    
  };



  const getBeer = async () => {
    
      const url = "http://localhost:8080/list/beers";
      const response = await fetch(url);
      const listBeer = await response.json();
      setAlcoholList(listBeer);
   

  };



  const handleBeer = (event) => {
    if (event.target.value === "beer" && event.target.checked === true) {
      getBeer();
     
    } else {
  getList();
    }
  };

 

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
        <WelcomeBanner />
        <Navbar  />
        <Searchbox
          setBeer={handleBeer}
          handleInput={handleSearch}
          searchTerm={searchTerm}
        />
        <div className="card-container">
          <Routes>
            <Route
              path="/"
              element={<AlcoholCardsList data={filteredAlcohol} />}
            />
                 <Route
              path="/list"
              element={<AlcoholCardsList data={filteredAlcohol} />}
            />
      
         
            <Route path="/createDrink" element={<CreateAlcoholCard />} />
            <Route path="/list/edit/:id" element={<EditAlcoholCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
