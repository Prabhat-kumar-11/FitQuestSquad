import { useState } from "react";
const initial = {
  height: "",
  weight: "",
  target: "",
};
export const MealsMeasurements = () => {
  const [data, setData] = useState(initial);
  const [weightOption, setWeightOption] = useState("no");
  const [showWeightInput, setShowWeightInput] = useState(false);

  const handleWeightOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeightOption(e.target.value);
    setShowWeightInput(e.target.value === "custom");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setWeight(e.target.value);
    let { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleClick = (e: any) => {
    if (data.height && data.weight) {
      let obj = {
        height: +data.height,
        weight: +data.weight,
        target: +data.target,
      };
      console.log(obj);
      alert("Data Submitted")
    } else {
      alert("Please fill in the data");
    }
  };
  return (
    <>
      <div className="container h-screen dark:bg-gray-800 mx-auto p-4">
        <div className="container rounded-lg text-white bg-[#334155]  mx-auto mt-24 w-1/3 p-6">
          <h4 className="text-lg text-center mb-7">Height & Body Weight</h4>
          <div className="mb-5 w-full">
            <label className="block mb-2 text-lg" htmlFor="height">
              Height (cm):
            </label>
            <input
              className="border text-black bg-gray-400 border-gray-300 w-full px-4 py-2 rounded"
              type="number"
              id="height"
              name="height"
              value={data.height}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-lg" htmlFor="weight">
              Weight (kg):
            </label>
            <input
              className="border text-black bg-gray-400 border-gray-300 w-full px-4 py-2 rounded"
              type="number"
              id="weight"
              name="weight"
              onChange={handleChange}
              value={data.weight}
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-lg" htmlFor="weight">
              SET TARGET WEIGHT ?
            </label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  value="no"
                  checked={weightOption === "no"}
                  onChange={handleWeightOptionChange}
                />
                <span className="ml-2">No</span>
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  value="custom"
                  checked={weightOption === "custom"}
                  onChange={handleWeightOptionChange}
                />
                <span className="ml-2">Yes</span>
              </label>
            </div>
          </div>

          {showWeightInput && (
            <div className="mb-4">
              <label className="block mb-2 text-lg" htmlFor="weight-custom">
                Custom Weight:
              </label>
              <input
                className="border text-black bg-gray-400 border-gray-300 w-full px-4 py-2 rounded"
                type="number"
                id="target"
                name="target"
                value={data.target}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="w-full  text-center 2 ">
            <button
              className="px-4 py-2 w-1/5 mt-5 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
