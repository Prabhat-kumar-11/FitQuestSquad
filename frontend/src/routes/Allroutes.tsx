import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { MealsExclusion } from "../components/meals/MealsExclusion";
import { MealsMeasurements } from "../components/meals/MealsMeasurements";
import { Home } from "../pages/home";
import { Meals } from "../pages/Meals";
import GoalTracking from "../pages/goalTracking";
import { NavBar } from "../components/NavBar";
import { UserPage } from "../pages/userPage";

export const AllRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/goaltracking" element={<GoalTracking />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/meals/exclusions" element={<MealsExclusion />} />
        <Route path="/meals/measurements" element={<MealsMeasurements />} />
      </Routes>
    </>
  );
};
