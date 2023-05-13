const mongoose = require("mongoose");

const mealsSchema = mongoose.Schema(
  {
    breakfast: { type: String, required: true },
    lunch: { type: String, required: true },
    dinner: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);
const MealsModel = mongoose.model("meal", mealsSchema);

module.exports = {MealsModel}