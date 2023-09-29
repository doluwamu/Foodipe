import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, sm, md, lg }) => {
  const { image, label, cuisineType, dietLabel, mealType, uri } =
    recipe?.recipe;

  const id = uri?.split("#")[1];

  return (
    <Link
      to={`/recipes/${id}`}
      className={`w-full sm:${sm ?? "w-1/2"} md:${md ?? "w-1/3"} lg:${
        lg ?? "w-1/4"
      }`}
    >
      <div className="bg-_gradient w-full rounded-lg">
        <img
          src={image}
          alt={label}
          className="rounded-lg h-[200px] md:h-[150px] w-full"
        />

        <div className="p-3">
          <p className="font-semibold">{label}</p>

          <div className="mt-2">
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] rounded-full mr-3 text-green-500">
              {cuisineType}
            </span>
            <span className="px-2 py-1 text-[12px] capitalize bg-[#0c452243] rounded-full text-green-500">
              {mealType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
