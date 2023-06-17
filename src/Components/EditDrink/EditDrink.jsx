// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import Form from "../Form/Form";
// import AlcoholCard from "../AlcoholCard/AlcoholCard";

// const EditDrink = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [drink, setDrink] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   const getDrinkById = async (id) => {
//     const url = `http://localhost:8080/list/${id}`;
//     const response = await fetch(url);
//     const drinkData = await response.json();
//     setDrink(drinkData);
//   };

//   useEffect(() => {
//     if (location.state) {
//       setDrink(location.state);
//     } else {
//       getDrinkById(id);
//     }
//   }, [id, location]);

//   const handleUpdate = async (updatedDrink) => {
//     const { name, origin, category, description, id } = updatedDrink;
//     const result = await fetch(`http://localhost:8080/list/edit/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, origin, category, description, id }),
//     });

//     if (result.ok) {
//       alert("Drink updated");
//       const updated = await result.json();
//       setDrink(updated);
//     } else {
//       const message = await result.text();
//       alert(message);
//     }
//   };

//   const handleDelete = async () => {
//     const result = await fetch(`http://localhost:8080/list/edit/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (result.ok) {
//       alert("Drink deleted");
//       navigate("/");
//     } else {
//       const message = await result.text();
//       alert(message);
//     }
//   };

//   const handleShowForm = () => setShowForm(!showForm);

//   return (
//     <section className="edit-drink">
//       <h2 className="edit-drink__title">Edit Drink</h2>
//       <div className="edit-drink__content">
//         {drink && (
//           <AlcoholCard
//             name={drink.name}
//             category={drink.category}
//             description={drink.description}
//             originCountry={drink.origin}
//             id={drink.id}
//             key={drink.id} 
//           />
//         )}
//         <div className="edit-drink__buttons">
//           <button
//             className={
//               showForm
//                 ? "edit-drink__button"
//                 : "edit-drink__button edit-drink__button--secondary"
//             }
//             onClick={handleShowForm}
//           >
//             Update
//           </button>
//           <button
//             className="edit-drink__button edit-drink__button--secondary"
//             onClick={handleDelete}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//       {showForm && (
//         <Form
//           defaultFormState={drink}
//           formTitle="Update drink"
//           handleSubmit={handleUpdate}

//         />
//       )}
//     </section>
//   );
// };

// export default EditDrink;
