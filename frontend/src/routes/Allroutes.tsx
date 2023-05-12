import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { MealsExclusion } from "../components/meals/MealsExclusion";
import { MealsMeasurements } from "../components/meals/MealsMeasurements";
import { Home } from "../pages/home";
import { Meals } from "../pages/Meals";
import GoalTracking from "../pages/goalTracking";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/goaltracking" element={<GoalTracking />} />
        <Route path= "/meals/exclusions" element = {<MealsExclusion/>}/>
        <Route path= "/meals/measurements" element = {<MealsMeasurements/>}/>

      </Routes>
    </>
  );
};
