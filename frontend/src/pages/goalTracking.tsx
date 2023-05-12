import { useState } from "react";

type Goal = {
  title: string;
  description: string;
  target: number;
  progress: number;
};

const GoalTracking = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoal = (goal: Goal) => {
    setGoals([...goals, goal]);
  };

  const removeGoal = (index: number) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  const updateProgress = (index: number, value: number) => {
    const updatedGoals = [...goals];
    updatedGoals[index].progress = value;
    setGoals(updatedGoals);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Goal Tracking</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const { title, description, target } =
            event.target as typeof event.target & {
              title: { value: string };
              description: { value: string };
              target: { value: string };
            };
          const newGoal = {
            title: title.value,
            description: description.value,
            target: parseInt(target.value),
            progress: 0,
          };
          addGoal(newGoal);
          // event.target.reset();
        }}
        className="grid grid-cols-2 gap-4 mb-8"
      >
        <label className="flex flex-col">
          <span className="text-gray-800 font-bold mb-2">Title:</span>
          <input
            type="text"
            name="title"
            required
            className="border border-gray-400 rounded py-2 px-3"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-800 font-bold mb-2">Description:</span>
          <input
            type="text"
            name="description"
            required
            className="border border-gray-400 rounded py-2 px-3"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-800 font-bold mb-2">Target:</span>
          <input
            type="number"
            name="target"
            required
            className="border border-gray-400 rounded py-2 px-3"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2"
        >
          Add Goal
        </button>
      </form>
      <ul className="space-y-4">
        {goals.map((goal, index) => (
          <li key={index} className="border border-gray-300 rounded p-4">
            <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
            <p className="text-gray-800 mb-2">{goal.description}</p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="w-1/4">Progress:</div>
                <div className="w-3/4 flex items-center">
                  <progress
                    className="w-full mr-2"
                    value={goal.progress}
                    max={goal.target}
                  />
                  <input
                    type="number"
                    min="0"
                    max={goal.target}
                    value={goal.progress}
                    onChange={(event) =>
                      updateProgress(index, parseInt(event.target.value))
                    }
                    className="border border-gray-400 rounded py-2 px-3 w-20 text-right"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => removeGoal(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Remove Goal
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GoalTracking;
