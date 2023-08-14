import "./CreateAlcoholCard.scss";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
const CreateAlcoholCard = () => {
  const navigate = useNavigate();

  const handleSubmit = async (newDrink) => {
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
  const defaultFormState = {
    name: "",
    description: "",
    category: "",
    originCountry: "",
    flag: "",
  };

  return (
    <section className="create-drink">
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        formTitle="Add A New Drink"
      />
    </section>
  );
};

export default CreateAlcoholCard;
