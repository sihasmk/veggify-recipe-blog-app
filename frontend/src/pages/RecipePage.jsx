import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MyTable from "../components/MyTable";
import { calculateTotalTime } from "../functions/calculateTotalTime";
import { parseInstructions } from "../functions/parseInstructions";

// Flowbite React Components
import { Spinner } from "flowbite-react";

const RecipePage = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [recipe, setRecipe] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const [instructions, setInstructions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const recipeResponse = await axios.get(
          `http://localhost:5000/api/items/${id}`
        );
        setRecipe(recipeResponse.data);
      } catch (err) {
        setError(err.message || "Error loading recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  useEffect(() => {
    if (recipe?.more?.preptime && recipe?.more?.cooktime) {
      setTotalTime(calculateTotalTime(recipe));
    }
    if (recipe?.instructions) {
      setInstructions(parseInstructions(recipe.instructions));
    }
  }, [recipe]);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="my-16">
      <div className="flex items-center justify-center mb-12">
        <div>
          <img src={recipe?.thumbnail_img} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4">{recipe?.name}</h1>
        <p>{recipe?.description}</p>
        <div className="mt-6 px-6">
          <h3 className="font-bold text-xl mb-3">Preparation Time</h3>
          <ul className="list-disc list-inside">
            <li>
              &ensp;
              <span className="font-semibold">Total:</span>&nbsp; {totalTime}{" "}
              minutes
            </li>
            <li>
              &ensp;
              <span className="font-bold">Preparation:</span>&nbsp;
              {recipe?.more?.preptime}
            </li>
            <li>
              &ensp;
              <span className="font-bold">Cooking:</span>&nbsp;
              {recipe?.more?.cooktime}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl mb-4 font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe?.ingredients?.map((ingredient) => (
            <li key={ingredient?._id}>
              &ensp;
              {ingredient?.name}: {ingredient?.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl mb-4 font-semibold">Instructions</h2>
        {instructions.map((instruction, index) => (
          <p key={index}>
            <span className="font-bold">{instruction.slice(0, 2)}</span>
            &emsp;
            {instruction.slice(2, instruction.length)}
          </p>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-3xl mb-4 font-semibold">Nutrition</h2>
        <MyTable
          columnHeadings={["Nutritional Content", "Amount"]}
          rowEntries={[
            ["Calories", "277kcal"],
            ["Carbohydrates", "10g"],
            ["Protein", "20g"],
            ["Fat", "22g"],
          ]}
        />
      </div>
    </div>
  );
};

export default RecipePage;
