import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipieList] = useState([]);
  const [recipeDetailsData, setrecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipieList(data?.data?.recipes);
        setLoading(false);
        setSearchParams("");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setSearchParams("");
    }
  }

  function handleAddToFavorites(getCurrentItem) {
    console.log(getCurrentItem.id);

    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    
    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }
    setFavoritesList(cpyFavoritesList);
    console.log(index,favoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        recipeDetailsData,
        setrecipeDetailsData,
        loading,
        recipeList,
        handleSubmit,
        handleAddToFavorites,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
