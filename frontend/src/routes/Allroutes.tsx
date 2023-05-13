import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { MealsList } from "../components/meals/MealList";
import { MealsExclusion } from "../components/meals/MealsExclusion";
import { MealsMeasurements } from "../components/meals/MealsMeasurements";
import { Home } from "../pages/home";
import { Meals } from "../pages/Meals";
import GoalTracking from "../pages/goalTracking";
import { NavBar } from "../components/NavBar";
import { UserPage } from "../pages/userPage";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { WorkoutRoutines } from "../components/WorkoutRoutines";
import { Workouts } from "../components/Workouts";

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
        <Route path="/meals/list" element={<MealsList/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/workout-routines" element={<WorkoutRoutines />} />
        <Route path="/workout-routines/:title" element={<Workouts />} />

      </Routes>
    </>
  );
};
