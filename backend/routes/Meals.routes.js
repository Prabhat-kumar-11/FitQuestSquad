const express = require("express");
const {
  BreakFastModel,
  LunchModel,
  DinnerModel,
  MealsModel,
} = require("../models/Meals.model");

const mealsRouter = express.Router();

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);
  // get random item
  const item = arr[randomIndex];
  return item;
}
mealsRouter.get("/", async (req, res) => {
  try {
    let meal = await MealsModel.find();
    const result = getRandomItem(meal);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
mealsRouter.post("/create", async (req, res) => {
  try {
    await MealsModel.insertMany(req.body);
    res.status(200).send({ msg: "Data Added" });
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = { mealsRouter };
