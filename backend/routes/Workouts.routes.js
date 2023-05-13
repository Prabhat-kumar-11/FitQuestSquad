const express = require("express");
const mongoose = require("express");
const { WorkoutsModel } = require("../models/Workouts.model");
const workoutsRouter = express.Router();

workoutsRouter.post("/create", async (req, res) => {
  try {
    const workouts = new WorkoutsModel(req.body);
    await workouts.save();

    res.status(200).send(req.body);
  }
  catch (err) {
    res.status(400).send({ "err": err.message });
  }
});


workoutsRouter.get("/", async (req, res) => {
  try {
    const workouts = await WorkoutsModel.find();

    res.status(200).send(workouts);
  }
  catch (err) {
    res.status(400).send({ "err": err.message });
  }
});


workoutsRouter.get("/:title", async (req, res) => {
  let { title } = req.params;
  title = title.replace("-", " ").toLocaleUpperCase();

  try {
    const workouts = await WorkoutsModel.findOne({ title });

    res.status(200).send(workouts);
  }
  catch (err) {
    res.status(400).send({ "err": err.message });
  }
});


module.exports = {
  workoutsRouter
}
