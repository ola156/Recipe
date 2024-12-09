import React from "react";

const ItemList = ({ food, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading......</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div key={item.id}>
            <div className="flex p-3 m-8 shadow-lg rounded-md ">
              <div className="max-w-[100px] h-[100px] rounded-sm">
                <img
                  src={
                    "https://spoonacular.com/cdn/ingredients_100x100/" +
                    item.image
                  }
                  alt=""
                  className="max-w-[100%] h-auto rounded"
                />
              </div>

              <div className="ml-11">
                <div className=" font-semibold text-xl">{item.name}</div>
                <div className="mt-3 font-semibold">
                  {item.amount}
                  {item.unit}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
