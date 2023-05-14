import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar';
import { Footer } from './footer';
import { useParams } from "react-router-dom";

export const Workouts = () => {
  const [exercises, setExercises] = useState<any>();
  const { title } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/workouts/${title}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.exercises);
        setExercises(res.exercises);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      {/* <NavBar /> */}

      <div className="mt-7 mb-9">
        <h2 className="w-11/12 lg:w-10/12 m-auto text-3xl font-bold">{title?.replace("-", " ").toLocaleUpperCase()}</h2>
        <p className="w-11/12 lg:w-10/12 m-auto font-bold text-gray-500 mb-9">WORKOUT</p>

        <div>
          {
            exercises
              ?
              exercises.map((el: any, i: any) =>
                <div key={i}>
                  <div className="flex justify-between w-11/12 lg:w-10/12 m-auto">
                    <div className="leading-7">
                      <p className="text-sm text-red-500 font-medium">EXERCISE {i + 1}</p>
                      <p className="font-medium">{el.exerciseName}</p>
                      <p className="text-sm"><span className="font-medium">Primary Muscles:</span> <span className="text-gray-500"> {el.primaryMuscles}</span></p>
                      <p className="text-sm"><span className="font-medium">Equipment:</span> <span className="text-gray-500"> {el.equipment}</span></p>
                    </div>
                    <div>
                      <img className="h-28" src={el.gif} alt={el.exerciseName} />
                    </div>
                    <div className="flex">
                      <div className="ml-3 mr-3 text-center">
                        <p className="font-medium">{el.sets}</p>
                        <p className="font-medium text-gray-400">SETS</p>
                      </div>
                      <div className="ml-3 mr-3 text-center">
                        <p className="font-medium">{el.reps}</p>
                        <p className="font-medium text-gray-400">REPS</p>
                      </div>
                      <div className="ml-3 mr-3 text-center">
                        <p className="font-medium">{el.rest}</p>
                        <p className="font-medium text-gray-400">REST</p>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-1 mb-5" />
                </div>
              )
              :
              null
          }
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}
