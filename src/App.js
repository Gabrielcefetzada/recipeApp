import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import './css/styles.css';

function App() {
  const APP_ID = "<YOUR APP_ID>";
  const APP_KEY = "YOUR APP_KEY";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault(); // evitar eventos padroes como refresh de pagina
    setQuery(search);
  }

  return (
    <div className="App">
      <br></br><br></br><br></br>
      <h1 id="mainTitle">Hello Mother Fucker, search something to get recipes!</h1>
      <form onSubmit={getSearch} className="form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="button is-danger">
          Search
        </button>
      </form>
      <div className="container-recipes">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          image={recipe.recipe.image}
        />
      ))}
    </div>
    </div>
  );
}

export default App;
