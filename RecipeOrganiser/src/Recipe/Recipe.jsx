import { useContext } from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/DataContextProvider";
import "./recipe.css"
export const Recipe = () => {
  const { rID } = useParams();
  const { recipe } = useContext(DataContext);
  const selectedRecipe = recipe.find((item) => item.id === rID);
  console.log(selectedRecipe);

  return (

    <div>
    <h2 className="card-title">Recipe</h2>
    <div className="card">
      
      <div className="card-body">
        <img src={selectedRecipe?.foodPic} className="card-image" alt="Recipe" />

        <div className="card-details">
          <p className="card-cuisine">Cuisine: {selectedRecipe.cuisine}</p>
          <p className="card-ingredients">
            <p className="card-ing">Ingredients:</p> 
            <p>{selectedRecipe.ingredients.map((item) => item).join(", ")}</p>
          </p>
          <ol className="card-instructions">
            <p className="card-instructions-title">Instructions:</p>
            {selectedRecipe.instructions.map((item) => (
              <li key={item} className="card-instruction-item">{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
    </div>
  );
};
