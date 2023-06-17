import React from "react";
import "./AlcoholCardsList.scss";
import AlcoholCard from "../AlcoholCard/AlcoholCard";
import { Link } from "react-router-dom";

const AlcoholCardsList = (props) => {
  const { data } = props;
  const alcoholCards = [...new Set(data.map((card) => card.originCountry))].map(
    (originCountry) => {
      const drinksFromOriginCountry = data.filter(
        (card) => card.originCountry === originCountry
      );

      return (
        <div key={originCountry}>
          <h1>{originCountry}</h1>

          {drinksFromOriginCountry.map((drink) => (
            <div key={drink.id}>
              <Link to={`/list/edit/${drink.id}`}>
                <AlcoholCard
                  name={drink.name}
                  category={drink.category}
                  description={drink.description}
                  originCountry={drink.originCountry}
                  key={drink.id}
                  id={drink.id} 
                />
              </Link>
            </div>
          ))}
        </div>
      );
    }
  );

  return <div className="cards-container">{alcoholCards}</div>;
};

export default AlcoholCardsList;
