import React, { useState } from "react";
import "./CreateAlcoholCard.scss";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
const CreateAlcoholCard = () => {
  const navigate = useNavigate();


  const handleSubmit = async newDrink => {
    const { name, description, category, originCountry } = newDrink;
    

    const result = await fetch("http://localhost:8080/createDrink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDrink), 
    });

    if (result.ok) {
      alert("Drink added");
      const drink = await result.json();
      navigate("/");
    }
  };
  const defaultFormState = { name: "",  description:"", category: "", originCountry:""};

  return (
    <section className="create-drink">
      <h2 className="create-drink__title">Create Drink</h2>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add A New Drink"
    
      />
    </section>
  );
};

export default CreateAlcoholCard;
