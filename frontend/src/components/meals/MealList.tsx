import axios from "axios";
import React, { useState, useEffect } from "react";
const breakfastData = {
  protein: 97,
  fats: 117,
  carbs: 272,
  total: 486,
};
const lunchData = {
  protein: 155,
  fats: 194,
  carbs: 427,
  total: 777,
};
const dinnerData = {
  protein: 136,
  fats: 170,
  carbs: 374,
  total: 680,
};
const initial = {
  breakfast: "",
  lunch: "",
  dinner: "",
};
export const MealsList = () => {
  const [caloricValue, setCaloricValue] = useState("1922");
  const [quantity, setQuantity] = useState(String);
  const [lunch, setLunch] = useState(lunchData);
  const [dinner, setDinner] = useState(dinnerData);
  const [breakfast, setBreakFast] = useState(breakfastData);
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState(initial);
  const [show, setShow] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaloricValue(e.target.value);
  };

  const handleIncrement = () => {
    setCaloricValue((prevValue) => String(Number(prevValue) + 1));
  };

  const handleDecrement = () => {
    setCaloricValue((prevValue) => String(Number(prevValue) - 1));
  };

  const handleCalculate = () => {
    // Perform calculation logic here
    setShow((prev) => !prev);
  };
  const handleMeals = async () => {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/meals`)
      .then((res) => {
        console.log(res);
        setMeals(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="p-4 dark:bg-gray-800  text-white mx-auto my-auto">
      <h5 className="mb-4 mt-10 text-center text-xl font-medium">
        Daily caloric demand(kcal)
      </h5>
      <div className="flex items-center gap-2 justify-center  mx-auto my-auto">
        <button
          className="p-1 text-white text-3xl  focus:outline-none"
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          className="w-16 px-2 py-1 text-black bg-gray-300 text-center outline-none appearance-none border rounded-md"
          type="text"
          name="caloric_value"
          value={caloricValue}
          onChange={handleInputChange}
        />
        <button
          className="p-1 text-white text-2xl focus:outline-none"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 w-1/6  bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>
      <div>
        {show ? (
          <div
            className="bg-[#334155] mx-auto  rounded mt-10 p-4 w-3/5
          "
          >
            <table className="mx-auto">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pl-4 pr-2 text-center" scope="col">
                    Meal(kcal)
                  </th>
                  <th className="py-4 px-2 text-left" scope="col">
                    Protein(kcal)
                  </th>
                  <th className="py-4 px-2 text-center" scope="col">
                    Fats(kcal)
                  </th>
                  <th className="py-4 px-2 text-center" scope="col">
                    Carbs(kcal)
                  </th>
                  <th className="py-4 px-2 text-center">Total(kcal)</th>
                  <th className="py-4 px-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <button className="bg-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow">
                      Breakfast (10:00)
                    </button>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={breakfast.protein}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={breakfast.fats}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={breakfast.carbs}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={breakfast.total}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <button className="bg-gray-300 w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow">
                      Lunch (14:00)
                    </button>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={lunch.protein}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={lunch.fats}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={lunch.carbs}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={lunch.total}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <button className="bg-gray-300 w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow">
                      Dinner (20:00)
                    </button>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={dinner.protein}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={dinner.fats}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={dinner.carbs}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                  <td className="py-3 px-6 text-left">
                    <input
                      className="w-20 pl-2 py-1 text-sm border rounded text-black bg-gray-300 outline-none focus:shadow-outline"
                      type="number"
                      min="0"
                      value={dinner.total}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 w-1/6  bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleMeals}
              >
                Show Meals
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <div
        className="bg-[#334155] mx-auto  rounded mt-10 p-4 w-3/5
          "
      >
        <h4 className="text-center text-xl">Curated Meals For You</h4>
        <div>
          <table className="mx-auto w-3/5">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4" scope="col">
                  Day
                </th>
                <th className=" text-left p-4" scope="col">
                  Breakfast
                </th>
                <th className=" text-left p-4" scope="col">
                  Lunch
                </th>
                <th className=" text-left p-4" scope="col">
                  Dinner
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-left" scope="col">
                  1
                </td>
                <td className="p-4 text-left" scope="col">
                  {meals?.breakfast}
                </td>
                <td className="p-4 text-left" scope="col">
                  {meals?.lunch}
                </td>
                <td className="p-4 text-left" scope="col">
                  {meals?.dinner}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
