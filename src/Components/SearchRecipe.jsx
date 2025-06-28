import React from "react";
import RecipeCard from "./RecipeCard";

const SearchRecipe = ({ recipes }) => {
  console.log(recipes);

  return (
    <>
      <section className="my-10 py-6 px-8 font-Headings flex flex-col space-y-10 items-center bg-background">
        <div className="w-full flex justify-center gap-5 flex-wrap">
          {recipes[0].map((recipe, index) => (
            <RecipeCard key={index} data={recipe} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SearchRecipe;
