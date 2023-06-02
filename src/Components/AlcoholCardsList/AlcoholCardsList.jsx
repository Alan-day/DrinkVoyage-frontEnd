import React from "react";
import "./AlcoholCardsList.scss";

const AlcoholCardsList = (props) => {
  const { alcoCards } = props;

  const cardList = alcoCards.map((card) => {
    return (
      <AlcoholCard
        name={card.name}
        category={card.category}
        description={card.description}
        origin={card.origin}
        id={card.id}
      />
    );
  });

  return <div>AlcoholCardsList</div>;
};

export default AlcoholCardsList;
