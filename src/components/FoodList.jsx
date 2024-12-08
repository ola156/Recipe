import React from "react";
import Foods from "./Foods";

const FoodList = ({ foodData, setFoodId }) => {
  return (
    <div>
      {foodData.map((food) => (
        <Foods food={food} key={food.id} setFoodId={setFoodId} />
      ))}
    </div>
  );
};

export default FoodList;
