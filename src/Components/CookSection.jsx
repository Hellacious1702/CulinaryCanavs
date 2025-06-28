import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const CookSection = () => {
  let PageUpLimit = 9;
  let PageDownLimit = 0;

  const [resCategory, setResCategory] = useState(["All Recipes"]);
  const [activeCategory, setActiveCategory] = useState(resCategory);
  const [categoryDropdown, setCategoryDropDown] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const [recipePage, setRecipePage] = useState(1);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes/tags").then(function (res) {
      setResCategory([...resCategory, ...res.data]);
    });

    axios.get("https://dummyjson.com/recipes").then(function (response) {
      setRecipes(response.data.recipes);
    });
  }, []);

  const handleCatChange = ({ resCategory }) => {
    if (resCategory != "All Recipes") {
      axios
        .get(`https://dummyjson.com/recipes/tag/${resCategory}`)
        .then(function (response) {
          setRecipes(response.data.recipes);
        });
      setActiveCategory(resCategory);
      setCategoryDropDown(false)
    } else {
      axios.get("https://dummyjson.com/recipes").then(function (response) {
        setRecipes(response.data.recipes);
      });
      setActiveCategory(resCategory);
      setCategoryDropDown(false)
    }
  };

  let filteredRecipes = recipes.slice(PageDownLimit, PageUpLimit);

  useEffect(() => {
    filteredRecipes = recipes.slice(PageDownLimit, PageUpLimit);
  }, [recipePage]);

  const handleAhead = () => {
    setRecipePage(recipePage + 1);
    PageUpLimit = PageUpLimit + 9;
    PageDownLimit = PageDownLimit + 9;
  };

  const handleBackWard = () => {
    setRecipePage(recipePage - 1);
    PageUpLimit = PageUpLimit - 9;
    PageDownLimit = PageDownLimit - 9;
  };

  console.log(recipes);

  return (
    <>
      <section className="my-10 py-6 px-8 font-Headings flex flex-col space-y-10 items-center bg-background">
        <div>
          <h1 className="text-5xl font-semibold text-dark md:text-center">
            What to <span className="text-primary">Cook</span>?
          </h1>
        </div>
        <div className="flex gap-5 flex-wrap justify-center px-[5vw] my-10">
          {resCategory
            .slice(0, categoryDropdown === true ? resCategory.length : 20)
            .map((resCategory, index) => (
              <p
                className={
                  activeCategory == resCategory
                    ? "text-white py-2 px-8 bg-primary rounded-full cursor-pointer "
                    : "text-primary py-2 px-8 bg-grey rounded-full cursor-pointer "
                }
                onClick={() => handleCatChange({ resCategory })}
              >
                {resCategory}
              </p>
            ))}
        </div>

        <FontAwesomeIcon
          className="cursor-pointer"
          icon={categoryDropdown === true ? faChevronUp : faChevronDown}
          onClick={() => setCategoryDropDown(!categoryDropdown)}
        />

        <div className="w-full flex justify-center gap-5 flex-wrap md:flex-col">
          {recipes.slice(PageDownLimit, PageUpLimit).map((recipe, index) => (
            <RecipeCard key={index} data={recipe} />
          ))}
        </div>

        <div className="flex space-x-5 items-center">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faChevronLeft}
            onClick={() => handleBackWard()}
          />
          <p>{recipePage}</p>
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faChevronRight}
            onClick={() => handleAhead()}
          />
        </div>
      </section>
    </>
  );
};

export default CookSection;
