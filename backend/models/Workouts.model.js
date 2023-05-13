const mongoose = require("mongoose");

const workoutsSchema = mongoose.Schema({
  title: { type: String },
  image: { type: String },
  name: { type: String },
  exercises: { type: Array }
});

const WorkoutsModel = mongoose.model("workouts", workoutsSchema);

module.exports = {
  WorkoutsModel
}
