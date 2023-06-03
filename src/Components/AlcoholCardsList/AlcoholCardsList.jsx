import React from "react";
import "./AlcoholCardsList.scss";
import AlcoholCard from "../AlcoholCard/AlcoholCard";
import data from "../../Resources/beers.js";

const AlcoholCardsList = () => {


  const alcoholCards = data.map((card) => {
    return (
      <AlcoholCard
        name={card.name}
        category={card.category}
        description={card.description}
        origin={card.origin}
        id={card.id}
        key={card.id} // Add a unique key prop when mapping over an array of components
      />
    );
  });

  return <div>{alcoholCards}</div>;
};

export default AlcoholCardsList;
