import React from "react";
import "./AlcoholCardsList.scss";
import AlcoholCard from "../AlcoholCard/AlcoholCard";
import { Link } from "react-router-dom";

const AlcoholCardsList = (props) => {
  const { data } = props;
  const alcoholCards = [...new Set(data)].map( drink =>{
 

      return (
        <div >
        
            <div >
              <Link key={drink.drinkId} to={`/list/edit/${drink.drinkId}`}>
                <AlcoholCard
                  name={drink.name}
                  category={drink.category}
                  description={drink.description}
                  originCountry={drink.originCountry}
                  key={drink.drinkId}
                  id={drink.drinkId} 
                />
              </Link> 
            </div> 
          
        </div>
      );
    }
  );




  return <div className="cards-container">{alcoholCards}</div>;
};

export default AlcoholCardsList;
