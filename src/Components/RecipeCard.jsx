import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const [dish, setDish] = useState([]);

  return (
    <>
      <section className="font-Body p-5 w-[25vw] bg-grey rounded-xl h-[65vh] flex flex-col justify-between md:w-full">
        <div>
          <h1 className="text-4xl font-semibold text-dark ">
            {props.data.name}
          </h1>
        </div>

        <img
          className="h-[40vh] rounded-lg"
          src={props.data.image}
          alt={props.data.name + " Image"}
        />

        <Link
          to={`/Recipe?${props.data.id}`}
          onClick={() => setDish(props.data)}
          className="bg-dark text-white py-2 px-5 rounded-full flex justify-between items-center"
        >
          <p>See Complete Recipe</p>
          <FontAwesomeIcon icon={faKitchenSet} style={{ color: "#ffffff" }} />
        </Link>
      </section>
    </>
  );
};

export default RecipeCard;
