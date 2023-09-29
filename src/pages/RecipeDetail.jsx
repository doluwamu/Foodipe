import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe, fetchRecipes } from "../utils";
import Loading from "../components/Loading";
import Header from "../components/Header";
import { AiFillPushpin } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";
import RecipeCard from "../components/RecipeCard";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getRecipe = async (id) => {
    try {
      setLoading(true);

      const data = await fetchRecipe(id);

      setRecipe(data);

      const recommend = await fetchRecipes({ query: recipe?.label, limit: 5 });

      setRecipes(recommend);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-full">
      <Header title={recipe?.label} image={recipe?.image} />

      <div className="w-full px-4 lg:px-20 pt-5">
        <div className="flex gap-10 items-center justify-center px-4">
          <div className="flex flex-col justify-between">
            <span className="text-orange-500 text-center border border-gray-500 py-1.5 px-2 rounded-full mb-2">
              {recipe?.calories.toFixed(2)}{" "}
            </span>

            <p className=" text-[12px] text-center md:text-md">CALORIES</p>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-orange-500 text-center border border-gray-500 py-1.5 rounded-full mb-2">
              {recipe?.totalTime}
            </span>
            <p className=" text-[12px] text-center md:text-md">TOTAL TIME</p>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-orange-500 text-center border border-gray-500 py-1.5 rounded-full mb-2">
              {recipe?.yield}
            </span>
            <p className=" text-[12px] text-center md:text-md">SERVINGS</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-8 py-20 px-4 md:px-2 md:flex-row">
          {/* LEFT SIDE */}
          <div className="w-full md:border-r border-slate-800 pr-1 md:w-1/2">
            <div className="flex flex-col gap-5">
              <p className="text-orange-500 text-2xl underline">Ingredients</p>

              {recipe?.ingredientLines?.map((ingredient, index) => {
                return (
                  <p key={index} className=" flex gap-2">
                    <AiFillPushpin className="text-orange-500 text-xl" />{" "}
                    {ingredient}
                  </p>
                );
              })}
            </div>

            <div className="flex flex-col gap-3 mt-20">
              <p className="text-orange-500 text-2xl underline">
                Health Labels
              </p>

              <div className="flex flex-wrap gap-4">
                {recipe?.healthLabels.map((item, index) => (
                  <p
                    className="flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full "
                    key={index}
                  >
                    <BsPatchCheck color="orange" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full 2xl:pl-10 mt-20 md:mt-0 md:w-1/2">
            {recipes?.length > 0 && (
              <>
                <p className="text-2xl">Also Try This</p>

                <div className="flex jusftify-between gap-4 flex-wrap px-4 pt-3">
                  {recipes?.map((item, index) => (
                    <RecipeCard
                      recipe={item}
                      index={index}
                      smm={"sm:w-2/5"}
                      mdd={"md:w-full"}
                      lgg={"lg:w-3/4"}
                      key={`${index}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
