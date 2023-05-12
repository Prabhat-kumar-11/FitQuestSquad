import { useState } from "react";

interface UserInfo {
  name: string;
  age: number;
  height: number;
  weight: number;
  fitnessGoals: string[];
}

export const UserPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    age: 0,
    height: 0,
    weight: 0,
    fitnessGoals: [],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleFitnessGoalChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedValues = selectedOptions.map((option) => option.value);
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      fitnessGoals: selectedValues,
    }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={userInfo.name}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={userInfo.age}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={userInfo.height}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="weight">Weight:</label>
      <input
        type="number"
        id="weight"
        name="weight"
        value={userInfo.weight}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="fitnessGoals">Fitness Goals:</label>
      <select
        id="fitnessGoals"
        name="fitnessGoals"
        multiple={true}
        onChange={handleFitnessGoalChange}
      >
        <option value="Weight Loss">Weight Loss</option>
        <option value="Muscle Gain">Muscle Gain</option>
        <option value="Cardiovascular Health">Cardiovascular Health</option>
      </select>
      <br />
      <button>Save</button>
    </div>
  );
};
