import React from 'react'

const EditAlcoholCard = () => {

    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [drink, setDrink] = useState(null);
    const [showForm, setShowForm] = useState(false);
  
    const getGreetingById = async id => {
      const url = `http://localhost:8080/list/drink/${id}`;
      const response = await fetch(url);
      const alcoholData = await response.json();
      setGreeting(alcoholData);
    };
  
    useEffect(() => {
        if (location.state) {
          setGreeting(location.state);
        } else {
          getGreetingById(id);
        }
      }, [id, location]);
    
      const handleUpdate = async (updatedDrink) => {
        const { name, origin, category, description, id } = updatedDrink;

        const result = await fetch(`http://localhost:8080/list/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedDrink),
        });
    
        if (result.ok) {
          alert("Drink updated");
          const updated = await result.json();
          setDrink(updated);
        } else {
          const message = await result.text();
          alert(message);
        }
      };
    
      const handleDelete = async () => {
        const result = await fetch(`http://localhost:8080/list/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (result.ok) {
          alert("Drink deleted");
          navigate("/");
        } else {
          const message = await result.text();
          alert(message);
        }
      };
    
      const handleShowForm = () => setShowForm(!showForm);
    
      if (!greeting) return <h1>not found</h1>;
    
      return (
        <section className="edit-greeting">
          <h2 className="edit-greeting__title">Edit Drink</h2>
          <div className="edit-greeting__content">
            <Drink drink={drink} key="drink" />
            <div className="edit-greeting__buttons">
              <button
                className={showForm ? "edit-greeting__button" : "edit-greeting__button edit-greeting__button--secondary"}
                onClick={handleShowForm}
              >
                Update
              </button>
              <button className="edit-greeting__button edit-greeting__button--secondary" onClick={handleDelete}>
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










  return (
    <div>EditAlcoholCard</div>
  )
}

export default EditAlcoholCard