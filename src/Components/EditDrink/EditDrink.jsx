// import React from "react";

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
//     const { name, origin, category, description, id } = updated;
//     const result = await fetch(`http://localhost:8080/list/${id}`, {
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
//     const result = await fetch(`http://localhost:8080/list/${id}`, {
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
//     <section className="edit-greeting">
//       <h2 className="edit-greeting__title">Edit Greeting</h2>
//       <div className="edit-greeting__content">
//         <Drink drink={drink} key="greeting" />
//         <div className="edit-greeting__buttons">
//           <button
//             className={
//               showForm
//                 ? "edit-greeting__button"
//                 : "edit-greeting__button edit-greeting__button--secondary"
//             }
//             onClick={handleShowForm}
//           >
//             Update
//           </button>
//           <button
//             className="edit-greeting__button edit-greeting__button--secondary"
//             onClick={handleDelete}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//       {showForm && (
//         <Form
//           defaultFormState={greeting}
//           formTitle="Update greeting"
//           handleSubmit={handleUpdate}
//           countries={countries}
//           users={users}
//         />
//       )}
//     </section>
//   );
// };

// export default EditDrink;