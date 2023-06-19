import React from "react";
import "./AlcoholCard.scss";

const AlcoholCard = (props) => {
  const { originCountry, name, category, description, drinkId} = props;
console.log(props)
  return (
    <div className="alco-card">
      <h1 className="alco-card__name">{name}</h1>
      <p className="alco-card__description">Description: {description}</p>
      <p className="alco-card__category">category: {category}</p>
      <p className="alco-card__origin">country of origin: {originCountry}</p>

    </div>
  );
};

export default AlcoholCard;
