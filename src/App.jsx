import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlcoholCardsList from "./Components/AlcoholCardsList/AlcoholCardsList";
import Searchbox from "./Components/Searchbox/Searchbox";
import Navbar from "./Components/Navbar/Navbar";
import WelcomeBanner from "./Components/WelcomeBanner/WelcomeBanner";
import CreateAlcoholCard from "./Components/CreateAlcoholCard/CreateAlcoholCard";
import EditAlcoholCard from "./Components/EditAlcoholCard/EditAlcoholCard";
import "./App.scss";
import Homepage from "./Components/Homepage/Homepage";

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


  const getWine = async () => {
    
    const url = "http://localhost:8080/list/wines";
    const response = await fetch(url);
    const listWine = await response.json();
    setAlcoholList(listWine);
 

};

const getVodka = async () => {
    
  const url = "http://localhost:8080/list/vodkas";
  const response = await fetch(url);
  const listVodkas = await response.json();
  setAlcoholList(listVodkas);


};


const getRakia = async () => {
    
  const url = "http://localhost:8080/list/rakias";
  const response = await fetch(url);
  const listRakias = await response.json();
  setAlcoholList(listRakias);


};

const getWhiskey = async () => {
    
  const url = "http://localhost:8080/list/whiskeys";
  const response = await fetch(url);
  const listWhiskeys = await response.json();
  setAlcoholList(listWhiskeys);


};



const getOthers = async () => {
    
  const url = "http://localhost:8080/list/others";
  const response = await fetch(url);
  const listOthers = await response.json();
  setAlcoholList(listOthers);


};









  const handleBeer = (event) => {
    if (event.target.value === "beer" && event.target.checked === true) {
      getBeer();
     
    } else {
  getList();
    }
  };



  const handleWine = (event) => {
    if (event.target.value === "wine" && event.target.checked === true) {
      getWine();
     
    } else {
  getList();
    }
  };


  const handleWhiskey = (event) => {
    if (event.target.value === "whiskey" && event.target.checked === true) {
      getWhiskey();
     
    } else {
  getList();
    }
  };



  const handleRakias = (event) => {
    if (event.target.value === "rakia" && event.target.checked === true) {
      getRakia();
     
    } else {
  getList();
    }
  };


  const handleVodkas = (event) => {
    if (event.target.value === "vodka" && event.target.checked === true) {
      getVodka();
     
    } else {
  getList();
    }
  };


  const handleOthers = (event) => {
    if (event.target.value === "other" && event.target.checked === true) {
      getOthers();
     
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
    <div className="card-container">
      <Routes>
        <Route
          path="/"
          element={<Homepage  />}
        />
        <Route
          path="/list"
          element={
            <>
            <div className="card-container__search">
              <Searchbox
                setBeer={handleBeer}
                setOther={handleOthers}
                setVodka={handleVodkas}
                setRakia={handleRakias}
                setWine={handleWine}
                setWhiskey={handleWhiskey}
                handleInput={handleSearch}
                searchTerm={searchTerm}
              />
              <AlcoholCardsList data={filteredAlcohol} />
              </div>
            </>
          }
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
