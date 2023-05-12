import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faUserPlus,
  faAddressBook,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export const Meals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex h-screen p-6 bg-white   shadow dark:bg-gray-800 dark:border-gray-700 align-middle ">
        <div className="w-1/2 h-24 mx-auto my-28">
          <div className="container mx-0 min-w-full flex flex-col items-center ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              You don't have menus yet
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              You currently have no meal plan that you can view or edit.
            </p>
          </div>
          <div className="container mx-0 min-w-full flex flex-col items-center">
            <div className="relative">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setIsOpen(true)}
              >
                Create a new menu
              </button>
              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-[#334155] p-6 rounded shadow-md">
                    <div className="flex justify-end mb-4 ">
                      <button
                        className="flex items-center  justify-center py-2 px-2 "
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          className="text-2xl text-white"
                        />
                      </button>
                    </div>

                    <div className="flex flex-col gap-5 ">
                      <button
                        className="flex items-center justify-left px-4 py-2 bg-green-400 w-full text-black rounded hover:bg-green-600 mr-2"
                        onClick={() => {
                          navigate("/meals/exclusions");
                        }}
                      >
                        <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                        For new profile
                      </button>

                      <button
                        className="flex items-center justify-left px-4 py-2 bg-green-400 w-full  text-black rounded hover:bg-green-600 mr-2"
                        onClick={() => {
                          navigate("/meals/exclusions");
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faAddressBook}
                          className="mr-2"
                        />
                        For Existing Profile
                      </button>

                      <button
                        className="flex items-center justify-left px-4 py-2 bg-green-400 w-full text-black rounded hover:bg-green-600"
                        onClick={() => {
                          console.log("Button 3 clicked!");
                          navigate("/meals/exclusions");
                        }}
                      >
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        For yourself
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
