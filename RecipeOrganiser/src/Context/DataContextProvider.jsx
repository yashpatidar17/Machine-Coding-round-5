import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "../Reducer/Reducer";
import { Recipes } from "../DB/RecipeData";
import { AddRecipeModal } from "../AddRecipeModal";

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const initialState = { recipeData: [] };
  const [dataState, dispatch] = useReducer(reducer, initialState);
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setRecipe(Recipes);
  }, []);

  console.log(recipe, "fksdafn");
  const DeleteHandler = (id) => {
    setRecipe((prev) => prev.filter((item) => item.id !== id));
  };

  const sortFun = () => {
    let rec = [...recipe];

    if (sort === "name") {
      if (search.length > 0) {
        return (rec = rec.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ));
      }
    } else if (sort === "cuisine") {
      if (search.length > 0) {
        return (rec = rec.filter((item) =>
          item.cuisine.toLowerCase().includes(search.toLowerCase())
        ));
      }
    } else if (sort === "ingredients") {
      if (search.length > 0) {
        return (rec = rec.filter((item) =>
          item.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(search.toLowerCase())
          )
        ));
      }
    }

    return rec;
  };

  const sortedData = sortFun();

  const addRecipeHandler = () => {
    openModal();
  };

  return (
    <div>
    {showModal && <AddRecipeModal  closeModal={closeModal}/>}

      <DataContext.Provider
        value={{
          dataState,
          dispatch,
          recipe,
          item: 4,
          DeleteHandler,
          setSearch,
          sortedData,
          search,
          sort,
          setSort,
          addRecipeHandler,
          openModal,
          closeModal,
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};
