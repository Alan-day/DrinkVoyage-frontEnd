import React from "react";
import "./AlcoholCardsList.scss";
import AlcoholCard from "../AlcoholCard/AlcoholCard";
import { Link } from "react-router-dom";

const AlcoholCardsList = (props) => {
  const { data } = props;
  const originCountries = data.reduce((countries, drink) => {
    if (!countries.includes(drink.originCountry)) {
      countries.push(drink.originCountry);
    }
    return countries;
  }, []);

  const sortedCountries = originCountries.sort();

  const filteredAlcoholCards = sortedCountries.map((country) => {
    const cardsForCountry = data.filter(drink => drink.originCountry === country);

    return (
      <div key={country}>
        <h1 className="country-heading">{country}</h1>
        {cardsForCountry.map((drink) => (
          <Link key={drink.drinkId} to={`/list/edit/${drink.drinkId}`} style={{ textDecoration: 'none' }}>
            <AlcoholCard
              name={drink.name}
              category={drink.category}
              description={drink.description}
              originCountry={drink.originCountry}
              key={drink.drinkId}
              id={drink.drinkId} 
              image={drink.flag}
            />
          </Link>
        ))}
      </div>
    );
  });

  return <div className="cards-container">{filteredAlcoholCards}</div>;
};

export default AlcoholCardsList;
