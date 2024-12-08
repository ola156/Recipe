import React from "react";

const Foods = ({ food, setFoodId }) => {
  return (
    <div className="w-[300px] rounded-md shadow-lg m-5 overflow-hidden">
      <img src={food.image} alt="food" className="max-w-[100%] h-auto" />
      <div className="pt-4">
        <p className="text-center  font-semibold text-gray-800">{food.title}</p>
      </div>
      <div className=" mb-4 flex justify-around mt-2">
        <button
          onClick={() => {
            setFoodId(food.id);
            console.log(food.id);
          }}
          className="py-2 px-4 cursor-pointer bg-blue-600 border-none text-white rounded"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default Foods;
