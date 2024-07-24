import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Detail() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setrecipeDetailsData,
    handleAddToFavorites,
    favoritesList,
   } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setrecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, []);
  console.log(recipeDetailsData)

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            alt=""
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h2 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData?.recipe?.title}
        </h2>
        <div>
          <button
            onClick={() => handleAddToFavorites(recipeDetailsData?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white my-4"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from Favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text 2-xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3 my-4">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span className="text 2-xl font-semibold text-black">
                  {`${ingredient.quantity !== null  ? ingredient.quantity:""} ${ingredient.unit} `}
                </span>
                <span className="text 2-xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
