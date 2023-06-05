import React from "react";
import "./AlcoholCardsList.scss";
import AlcoholCard from "../AlcoholCard/AlcoholCard";


const AlcoholCardsList = (props) => {
  const { data } = props;

  const alcoholCards = data.map((card) => {
    return (
      <AlcoholCard
        name={card.name}
        category={card.category}
        description={card.description}
        origin={card.origin}
        id={card.id}
        key={card.id}
      />
    );
  });

  return <div>{alcoholCards}</div>;
};

export default AlcoholCardsList;
