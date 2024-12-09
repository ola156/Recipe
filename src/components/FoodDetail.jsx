import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const FoodDetail = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL1 = ` https://api.spoonacular.com/recipes/${foodId}/information`;
  const Api_Keys = "6065fbb3bbd4496daced0dc07893302e";
  useEffect(() => {
    const getRecipe = async () => {
      const res = await fetch(`${URL1}?apiKey=${Api_Keys}`);
      const data = await res.json();
      setFood(data);
      console.log(data);
      setIsLoading(false);
    };
    getRecipe();
  }, [foodId]);

  return (
    <div>
      <div className="max-w-[600px] my-[20px] mx-auto p-4 shadow-xl rounded">
        <h2 className="text-center text-black font-extrabold"> Food Detail</h2>
        <h3 className="font-semibold text-center">{food.title}</h3>
        <img
          src={food.image}
          alt="food"
          className="w-full h-auto m-2 rounded"
        />
        <div className="mb-3 flex justify-around align-center">
          <span>
            <strong>{food.vegetarian ? "vegetarian" : "Not vegetarian"}</strong>
          </span>
          <span>
            <strong>{food.veryHealthy ? "Healty" : "Not Healty"}</strong>
          </span>
          <span>
            <strong>{food.veryPopular ? "Popular" : "Not Popular"}</strong>
          </span>
        </div>
        <div className=" mr-5">
          <span className="font-semibold">
            ${food.pricePerServing} Per Serving
          </span>
        </div>

        <h2 className=" text-gray-900 font-bold">Ingerident</h2>
        <ItemList food={food} isLoading={isLoading} />
        <div className="p-0 rounded text-gray-600">
          <h2 className=" text-gray-900 font-bold">Instructions</h2>
          <ol>
            {isLoading ? (
              <p>Loading......</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <div key={step.number} className="flex gap-1 px-3 ">
                  {step.number}
                  <li>{step.step}</li>
                </div>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
