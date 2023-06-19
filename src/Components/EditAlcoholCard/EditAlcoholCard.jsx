import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Form from '../Form/Form';
import AlcoholCard from '../AlcoholCard/AlcoholCard';
import "./EditAlcoholCard.scss"

const EditAlcoholCard = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [drink, setDrink] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const getDrinkById = async (id) => {
    const url = `http://localhost:8080/list/${id}`;
    const response = await fetch(url);
    const alcoholData = await response.json();
    setDrink(alcoholData);
  };

  useEffect(() => {
    if (location.state) {
      setDrink(location.state);
    } else {
      getDrinkById(id);
    }
  }, [id, location]);

  const handleUpdate = async (updatedDrink) => {

    try {
    
      const { name, origin, category, description,drinkId} = updatedDrink;
      const url = `http://localhost:8080/list/edit/${drinkId}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, origin, category, description, drinkId }),
      });
      if (!response.ok) {
        throw new Error('Failed to update drink');
      }
      const updated = await response.json();
      setDrink(updated);
      alert('Drink updated');
    } catch (error) {
      console.error(error);
      const message = 'Failed to update drink';
      alert(message);
    }

  };

  const handleDelete = async () => {
    const result = await fetch(`http://localhost:8080/list/edit/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (result.ok) {
      alert('Drink deleted');
      navigate('/');
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const handleShowForm = () => setShowForm(!showForm);

  if (!drink) return <h1>Not found</h1>;

  return (
    <section className="edit-drink">
      <h2 className="edit-drink__title">Edit Drink</h2>
      <div className="edit-drink__content">
        <AlcoholCard
          name={drink.name}
          category={drink.category}
          description={drink.description}
          originCountry={drink.originCountry}
          id={drink.drinkId}
          key={drink.drinkId}
        />
        <div className="edit-drink__buttons">
          <button
      
            onClick={handleShowForm}
          >
            Update
          </button>
          <button
      
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      {showForm && (
        <Form
          defaultFormState={drink}
          formTitle="Update drink"
          handleSubmit={handleUpdate}
        />
      )}
    </section>
  );
};

export default EditAlcoholCard;
