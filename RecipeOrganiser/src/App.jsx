import { Route, Routes } from "react-router";
import "./App.css";

import { Recipe } from "./Recipe/Recipe";
import { RecipeCard } from "./RecipeCard/RecipeCard";

function App() {
  return (
    <div>
      
      <Routes>
      <Route path="" element={<RecipeCard/>}/>
        <Route path="/recipe/:rID" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
