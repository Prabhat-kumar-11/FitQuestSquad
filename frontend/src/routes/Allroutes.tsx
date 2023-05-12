import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Meals } from "../pages/Meals";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </>
  );
};
