import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { MealsExclusion } from "../components/meals/MealsExclusion";
import { Home } from "../pages/home";
import { Meals } from "../pages/Meals";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meals" element={<Meals />} />
        <Route path= "/meals/exclusions" element = {<MealsExclusion/>}/>
      </Routes>
    </>
  );
};
