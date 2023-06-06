import React, { useState } from "react";

const CreateAlcoholCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    origin: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Origin:
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
          />
        </label>
        <button></button>
      </form>
    </div>
  );
};

export default CreateAlcoholCard;
