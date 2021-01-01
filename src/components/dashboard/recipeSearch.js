import React, { useEffect, useState } from 'react';
import Headers from './dashboardComponents/headers';
import Recipe from "./recipe";


const RecipeSearch = () => {
  const APP_ID = "45ecce4d";
  const APP_KEY = "f339c726bbd979ac8b20054aea3df037";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect ( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log (data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search)
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  return (
    <div className="dashboard-feature-container" id="user-iSearch-page">
      <Headers text="Recipe Search" />
      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" 
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.key}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default RecipeSearch;