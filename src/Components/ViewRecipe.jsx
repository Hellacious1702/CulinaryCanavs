import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faFireBurner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const ViewRecipe = () => {
  const [DishParam] = useSearchParams();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const Dishid = DishParam.toString().slice(0, -1);

    axios.get(`https://dummyjson.com/recipes/${Dishid}`).then(function (res) {
      setRecipes([res.data]);
    });
  }, []);

  return (
    <>
      <section className="my-10 py-6 px-8 font-Headings flex flex-col gap-10 ">
        <Link to="/" className="flex gap-2 items-center">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faChevronLeft}
            onClick={() => handleBackWard()}
          />
          <p>Browse All Recipes</p>
        </Link>
        {recipes.map((recipe, i) => (
          <div className="flex gap-10 justify-cente md:flex-col">
            <div>
              <img
                className="h-[70vh] rounded-xl md:w-full"
                src={recipe.image}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-10 text-dark">
              <h1 className="text-4xl font-bold">{recipe.name}</h1>

              <div>
                <ul>
                  <li>
                    <span className="font-semibold">Preparation Time :</span>{" "}
                    {recipe.prepTimeMinutes + " Minutes"}
                  </li>
                  <li>
                    <span className="font-semibold">Cooking Time :</span>{" "}
                    {recipe.cookTimeMinutes + " Minutes"}
                  </li>
                  <li>
                    <span className="font-semibold">Serving :</span>{" "}
                    {recipe.servings + " People"}
                  </li>
                  <li>
                    <span className="font-semibold">Cuisine :</span>{" "}
                    {recipe.cuisine}
                  </li>
                  <li>
                    <span className="font-semibold">Calories/Serving :</span>{" "}
                    {recipe.caloriesPerServing + "kcal"}
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold flex gap-3 items-center mb-2">
                  <FontAwesomeIcon
                    icon={faBowlFood}
                    style={{ color: "#f97316" }}
                  />
                  Ingredients
                </h2>
                <ul className="md:flex flex-col gap-5 mt-5">
                  {recipe.ingredients.map((ingredient) => (
                    <li className="md:px-5">{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold flex gap-3 items-center mb-2">
                  {" "}
                  <FontAwesomeIcon
                    icon={faFireBurner}
                    style={{ color: "#f97316" }}
                  />{" "}
                  Instructions
                </h2>
                <ul className="md:flex flex-col gap-5 mt-5">
                  {recipe.instructions.map((instruction) => (
                    <li className="md:px-5">{instruction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ViewRecipe;
