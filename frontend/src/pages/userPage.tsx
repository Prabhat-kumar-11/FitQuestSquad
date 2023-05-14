import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UserPage = () => {
  const userMeals = useSelector((store: any) => {
    return store.mealsReducer.meals;
  });
  interface Meal {
    breakfast: string;
    lunch: string;
    dinner: string;
  }

  console.log(userMeals);

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-96 bg-blue-600 shadow-md">
        <ul className="py-4">
          <li className="px-6 py-2 text-white bg-blue-800 font-extrabold">
            Dashboard
          </li>

          <li className="px-6 py-2 hover:bg-blue-300 text-white cursor-pointer">
            <Link to={"/goaltracking"}>Goals add + </Link>
          </li>
          <li className="px-6 py-2 hover:bg-blue-300 text-white cursor-pointer">
            <Link to={"/meals"}>Nutritional Guidance </Link>
          </li>
          <li className="px-6 py-2 hover:bg-blue-300 text-white cursor-pointer">
            <Link to={"/workout-routines"}>Workout Routines </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 underline ">
              Goals Tracking
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              dapibus mauris.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 underline">
              Workout Routines
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              dapibus mauris.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Meals Chart</h2>

            <table>
              <thead>
                <tr>
                  <th>Breakfast</th>
                  <th>Lunch</th>
                  <th>Dinner</th>
                </tr>
              </thead>
              <tbody>
                {userMeals.map((row: Meal, index: number) => (
                  <tr key={index}>
                    <td>{row.breakfast}</td>
                    <td>{row.lunch}</td>
                    <td>{row.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Container 4</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              dapibus mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
