import React, { useEffect, useState } from 'react';

function App() {
  const [drinks, setDrinks] = useState([]);

  const getDrinks = async () => {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=10";
    const result = await fetch(url);
    const data = await result.json();
    setDrinks(data);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <div className="App">
      {drinks.map((drink) => (
        <div key={drink.id}>
          <h2>{drink.name}</h2>
          <p>{drink.tagline}</p>
          <p>{drink.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
