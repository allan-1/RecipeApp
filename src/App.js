import React, { useEffect, useState } from 'react'
import Recipe from './recipe'
import './App.css';

function App() {
  const APP_ID = '2b1bdd7d';
  const APP_KEY = '53bf68be539856f190ea3cc4035e81df';

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  const getRecipe = async () => {
    const response = await fetch(exampleRequest)
    const data = await response.json()
    setRecipies(data.hits)
  }
  const updateSearch = e => {
    setSearch(e.target.value)
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={ updateSearch }/>
        <button className='search-button' type="submit">Search</button>
      </form>
      <div className='recipies'>
        {recipies.map(recipe => (
          <Recipe key={recipe.recipe.label} title = {recipe.recipe.label} calories = {recipe.recipe.calories.toFixed(3)} image = {recipe.recipe.image} ingredients = {recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
