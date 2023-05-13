import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { MealsList } from "../components/meals/MealList";
import { MealsExclusion } from "../components/meals/MealsExclusion";
import { MealsMeasurements } from "../components/meals/MealsMeasurements";
import { Home } from "../pages/home";
import { Meals } from "../pages/Meals";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/meals" element={<Meals />} />
        <Route path= "/meals/exclusions" element = {<MealsExclusion/>}/>
        <Route path= "/meals/measurements" element = {<MealsMeasurements/>}/>
        <Route path="/meals/list" element={<MealsList/>}/>
      </Routes>
    </>
  );
};
