import { useContext } from "react";
import "./recipecard.css";
import { DataContext } from "../Context/DataContextProvider";
import { Link } from "react-router-dom";
import { Filter } from "../Filters/Filter";

export const RecipeCard = () => {
  const { DeleteHandler, sortedData, addRecipeHandler } =
    useContext(DataContext);

  return (
    <div>
      <Filter />
      <h2>All Recipes:</h2>
      <div className="recipeCard">
        {sortedData.length === 0 ? (
          <p>No Recipe Found</p>
        ) : (
          sortedData?.map((item) => (
            <div key={item.id} className="recipeCard-first">
              <Link to={`/recipe/${item.id}`}>
                <img src={item.foodPic} className="food-pic" />
              </Link>

              <p>{item.name}</p>
              <div className="recipeCard-second">
                <div className="recipeCard-third">
                  <p>Cuisine Type: </p>
                  <p>{item.cuisine}</p>
                </div>
                <div className="recipeCard-third">
                  <p>Ingredients: </p>
                  <p>See Recipe </p>
                </div>
                <div className="recipeCard-third">
                  <p>Instructions:</p>
                  <p> See Recipe </p>
                </div>
              </div>

              <button onClick={() => DeleteHandler(item.id) }>Delete</button>
            </div>
          ))
        )}

        <button onClick={addRecipeHandler} style={{display : sortedData.length===0 ? "none":"block"}}>+</button>
      </div>
    </div>
  );
};
