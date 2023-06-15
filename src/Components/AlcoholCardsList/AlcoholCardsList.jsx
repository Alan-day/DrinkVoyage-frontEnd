import React from "react";
import "./AlcoholCardsList.scss";
import AlcoholCard from "../AlcoholCard/AlcoholCard";

const AlcoholCardsList = (props) => {
  const { data } = props;

  const alcoholCards = data.map((card) => {
    return (
      <div key={card.id}>
        <h1>{card.originCountry}</h1>
        <AlcoholCard
          name={card.name}
          category={card.category}
          description={card.description}
          originCountry={card.originCountry}
          key={card.id}
        />
      </div>
    );
  });

  return <div className="cards-container">{alcoholCards}</div>;
};

export default AlcoholCardsList;
