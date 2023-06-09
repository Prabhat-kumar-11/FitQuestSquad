import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import { Footer } from './footer';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getWorkoutsRoutines } from '../redux/Workouts/action';

export const WorkoutRoutines = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const workouts = useSelector((store: any) => store.workoutsRoutinesReducer.workoutsRoutines)

  useEffect(() => {
    dispatch(getWorkoutsRoutines);
  }, []);

  const handleClick = (path: string) => {
    console.log(path);

    navigate(`${path}`);
  }

  return (
    <div>
      {/* <NavBar /> */}

      <div className="w-11/12 m-auto mt-7 mb-9">
        <h2 className="text-3xl font-bold text-center mb-4">WORKOUT CATEGORIES</h2>
        <p className="w-9/12 text-center m-auto text-lg mb-7">Choose a category that best suits the workout you're searching for. Once in the category, use the sort and filter options to find the right workout for your experience and goals.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-9">
          {
            workouts.length > 0
              ?
              workouts.map((el: any, i: any) =>
                <div onClick={() => handleClick(el.title.replace(" ", "-").toLocaleLowerCase())} key={i} className="cursor-pointer m-auto">
                  <img src={el.image} alt={el.name} />
                  <p className="text-center mt-1">{el.name}</p>
                </div>
              )
              :
              null
          }
        </div>
      </div>
    </div>
  )
}
