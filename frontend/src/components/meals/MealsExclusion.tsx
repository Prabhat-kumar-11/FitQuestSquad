import React, { useState } from "react";
import vegetable from "../../assets/vegetable.png";
import beef from "../../assets/beef.png";
import gluten from "../../assets/gluten-free.png";
import everything from "../../assets/everything.png";
import { NavBar } from "../NavBar";
import { log } from "console";
import { useNavigate } from "react-router";
export const MealsExclusion = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const arr: any = [];
  const navigate = useNavigate();
  const handleItem = (item: string) => {
    let res = arr.includes(item);
    res ? alert(`${item} is already selected`) : arr.push(item);
    // console.log(arr);
  };
  const icons = [
    {
      id: 1,
      name: "Vegetarian",
      description: [
        "Fishes",
        "Crustaceans and molluscs",
        "The meat",
        "Gelatine",
        "Smalec",
      ],
      icon: `${vegetable}`,
      eliminated: "Eliminated in: Vegetarian",
      items: ["Beetroot ", "Chilli Pepper", "Carrot", "Broccoli"],
    },
    {
      id: 2,
      name: "Paleo",
      description: [
        "Legumes",
        "Banana",
        "Czereśnie",
        "Grape",
        "Mango",
        "Agave syrup",
        "Cukier",
        "Maple",
      ],
      icon: `${beef}`,
      eliminated: "Eliminated in: Paleo",
      items: ["Chedar Cheese", "Cow Milk", "Kefir", "Maslo"],
    },
    {
      id: 3,
      name: "Gluten Free",
      description: [
        "Gluten cereals",
        "Kasza bulgur",
        "Kasza jęczmienna",
        "Kasza kuskus",
        "Kasza manna",
      ],
      icon: `${gluten}`,
      eliminated: " Eliminated in : Gluten Free",
      items: ["Chedar Cheese", "Camebeart", "Cheese", "Maslo"],
    },
    {
      id: 4,
      name: "I eat everything",
      description: ["None"],
      icon: `${everything}`,
      eliminated: "Eliminated in: I eat everything",
      items: ["Chedar Cheese", "Maflo", "Kefir", "Maslo"],
    },
  ];

  const handleClick = (id: any) => {
    setSelectedIcon(id);
  };

  return (
    <>
      <div className="dark:bg-gray-800  w-full h-screen  p-10 mx-auto ">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Exclusions
        </h2>

        <div className="flex justify-between w-3/4 mx-auto">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className={`flex flex-col items-center cursor-pointer ${
                selectedIcon === icon.id ? "text-blue-500" : "text-white"
              }`}
              onClick={() => handleClick(icon.id)}
            >
              <img src={icon.icon} alt={icon.name} className="w-10" />
              <span>{icon.name}</span>
            </div>
          ))}
        </div>

        {selectedIcon && (
          <div className="mt-10 text-center text-white  w-1/3 mx-auto ">
            <p className="font-semibold text-xl">
              {icons.find((icon: any) => icon.id === selectedIcon)?.eliminated}
            </p>
            <p className="text-gray-700">
              <ul className="mt-6">
                {icons
                  .find((icon: any) => icon.id === selectedIcon)
                  ?.description.map((item, index) => (
                    <li className="text-white text-left ml-20 " key={index}>
                      {">"} {item}
                    </li>
                  ))}
              </ul>
            </p>
            <div className="w-full border-2 mt-10 border-green-300 p-5">
              <p className="text-xl w-full  ">Select An Option </p>
              <div className="flex justify-between p-4  ">
                {icons
                  .find((icon: any) => icon.id === selectedIcon)
                  ?.items.map((item: any, index: any) => (
                    <button
                      onClick={() => handleItem(item)}
                      className="p-2 mt-4 hover:border 2 border-blue-400 text-blue-400 rounded"
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            </div>
            <div>
              <button
                className="px-4 py-2 mt-5 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  arr.length > 0
                    ? navigate("/meals/measurements")
                    : alert("Please Select Exclusions");
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
