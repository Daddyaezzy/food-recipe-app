import { useEffect, useState, useRef } from "react";
import "./styles/App.css";
import Recipe from "./component/Recipe";
import axios from "axios";
import logo from "./images/La Recipes-logos__transparent.png";

export function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    // getRecipe();
    setIsLoading(true);
    inputRef.current.focus();
    axios
      .get("http://localhost:8000/", { params: { q: query } })
      .then((response) => {
        if (response.data.hits.length === 0) {
          setIsLoading(false);
          setRecipes([]);
        } else {
          console.log(response.data.hits);
          setIsLoading(false);
          setRecipes(response.data.hits);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  const getSearch = (e) => {
    // const rValue = recipes.length === 0;
    // rValue = false;
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <div className="App">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-input"
            type="text"
            value={search}
            ref={inputRef}
            placeholder="Search for a meal recipe..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="search-button" type="submit">
            Submit
          </button>
        </form>
        {isLoading ? (
          <div className="loading">
            <img src={logo} alt="logo" />
            <p>Loading...</p>
          </div>
        ) : recipes.length === 0 ? (
          <div className="no-results">No results found for {query}</div>
        ) : (
          <div>
            <div className="results">
              <p>Top Results</p>
            </div>
            <div className="recipes">
              {recipes.map((recipe) => {
                return (
                  <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// export default App;
