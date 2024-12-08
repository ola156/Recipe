import React, { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const Api_Key = "6065fbb3bbd4496daced0dc07893302e";
const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("Pizza");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${Api_Key}`);
      const data = await res.json();
      setFoodData(data.results);
    };
    fetchData();
  }, [query]);

  return (
    <div className="flex py-6 px-3 shadow-lg align-middle gap-4">
      <div className="md:w-[30%] lg:w-[40%] items-center  lg:text-2xl text-bold pt-2 text-blue-700 pl-4">
        Recipe App
      </div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="px-3 py-2 shadow-md outline-none rounded "
        value={query}
      />
    </div>
  );
};

export default Search;
