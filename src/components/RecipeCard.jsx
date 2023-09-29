import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, smm, mdd, lgg }) => {
  const { image, label, cuisineType, dietLabel, mealType, uri } =
    recipe?.recipe;

  const id = uri?.split("#")[1];

  // console.log(lg || "w-1/4");

  return (
    <Link to={`/recipes/${id}`} className={`w-full ${smm} ${mdd} ${lgg}`}>
      <div className="bg-_gradient w-full rounded-lg">
        <img
          src={image}
          alt={label}
          className="rounded-lg h-[200px] md:h-[150px] w-full"
        />

        <div className="p-3">
          <p className="font-semibold">{label}</p>

          <div className="mt-2">
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] rounded-full mr-3 text-orange-500">
              {cuisineType}
            </span>
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] rounded-full text-orange-500">
              {mealType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
