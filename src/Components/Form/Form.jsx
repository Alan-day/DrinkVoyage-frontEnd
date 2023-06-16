import { useState } from "react";
import "./Form.scss";



const Form = ({ defaultFormState, handleSubmit, formTitle}) => {
  const [drink, setDrink] = useState(defaultFormState);

  const handleValidation = event => {
    event.preventDefault();

    if (Object.values(drink).some(value => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(drink);
  };

  return (
    <div className="form-container">
      <h2 className="form-container__title">{formTitle}</h2>
      <form className="form-container__form" onSubmit={handleValidation}>

      <label htmlFor="drink">Name: </label>
        <input
          id="name"
          className="form-container__input"
          type="text"
          placeholder="name"
          value={drink.name}
          onInput={event => setDrink({ ...drink, name: event.target.value })}
        />

        <label htmlFor="description">Country </label>
        <input
          id="name"
          className="form-container__input"
          type="text"
          placeholder="country"
          value={drink.originCountry}
          onInput={event => setDrink({ ...drink, originCountry: event.target.value })}
        />

        <label htmlFor="category">Category</label>
        <input
          id="name"
          className="form-container__input"
          type="text"
          placeholder="category"
          value={drink.category}
          onInput={event => setDrink({ ...drink, category: event.target.value })}
        />
        <label htmlFor="drink">Description: </label>
        <input
          id="name"
          className="form-container__input"
          type="text"
          placeholder="description"
          value={drink.description}
          onInput={event => setDrink({ ...drink, description: event.target.value })}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
