import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyTable from "../components/MyTable";
import { calculateTotalTime } from "../functions/calculateTotalTime";
import { parseInstructions } from "../functions/parseInstructions";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const [instructions, setInstructions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  console.log(recipe);

  return (
    <div>
      <div>
        <img src={recipe?.thumbnail_img} alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold ">{recipe?.name}</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classis omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables or meats.
        </p>
        <div>
          <h3>Preparation Time</h3>
          <ul>
            <li>
              <span className="font-bold">Total:</span> {totalTime} minutes
            </li>
            <li>
              <span className="font-bold">Preparation:</span>{" "}
              {recipe?.more?.preptime} minutes
            </li>
            <li>
              <span className="font-bold">Cooking:</span>{" "}
              {recipe?.more?.cooktime} minutes
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold">Ingredients</h2>
        <ul>
          {recipe?.ingredients?.map((ingredient) => (
            <li key={ingredient?._id}>
              {ingredient?.name}: {ingredient?.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-3xl font-semibold">Instructions</h2>
        {instructions.map((instruction) => (
          <p className="font-bold">{instruction}</p>
        ))}
      </div>
      <div>
        <h2 className="text-3xl font-semibold">Nutrition</h2>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings
        </p>
        <div className="">
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
    </div>
  );
};

export default RecipePage;
