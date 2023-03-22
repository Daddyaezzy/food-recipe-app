import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const APP_ID = "11a3786e";
  const APP_KEY = "67df2558fcf28d7610bc5026de58b8ae";

  const API = `https://api.edamam.com/api/recipes/v2/0123456789abcdef0123456789abcdef?app_id=${APP_ID}&app_key=${APP_KEY}&type=public
  `;

  useEffect(() => {
    // getRecipe();
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getRecipe = async () => {
    const response = await fetch(API);
    const data = response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form" action="">
        <input className="search-input" type="text" />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
