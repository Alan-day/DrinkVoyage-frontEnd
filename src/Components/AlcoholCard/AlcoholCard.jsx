import React from "react";
import "./AlcoholCard.scss";

const AlcoholCard = (props) => {
  const { origin, name, category, description, id } = props;

  return (
    <div className="alco-card">
      <h1 className="alco-card__name">{name}</h1>
      <p className="alco-card__description"> {description}</p>
      <p className="alco-card__category">{category}</p>
      <p className="alco-card__origin">{origin}</p>
      <p className="alco-card__id">{id}</p>
    </div>
  );
};

export default AlcoholCard;
