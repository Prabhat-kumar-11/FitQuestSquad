const express = require("express");
const {
  MealsModel,
} = require("../models/Meals.model");

const mealsRouter = express.Router();

mealsRouter.get("/", async (req, res) => {
  try {
    let meal = await MealsModel.find();
    res.status(200).send(meal);
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
