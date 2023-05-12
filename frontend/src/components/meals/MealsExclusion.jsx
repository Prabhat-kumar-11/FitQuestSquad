import React, { useState } from "react";
import vegetable from "../../assets/vegetable.png";
import beef from "../../assets/beef.png";
import gluten from "../../assets/gluten-free.png";
import everything from "../../assets/everything.png";
import { NavBar } from "../NavBar";
export const MealsExclusion = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

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

  const handleClick = (id) => {
    setSelectedIcon(id);
  };

  return (
    <>
      <NavBar />
      <div className="dark:bg-gray-800 h-screen w-full p-10 mx-auto ">
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
              {icons.find((icon) => icon.id === selectedIcon).eliminated}
            </p>
            <p className="text-gray-700">
              <ul className="mt-6">
                {icons
                  .find((icon) => icon.id === selectedIcon)
                  .description.map((item, index) => (
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
                  .find((icon) => icon.id === selectedIcon)
                  .items.map((item, index) => (
                    <button
                      className="p-2 mt-4 hover:border 2 border-blue-400 text-blue-400 rounded"
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
