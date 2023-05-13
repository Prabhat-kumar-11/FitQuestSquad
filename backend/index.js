const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/User.routes");
const { workoutsRouter } = require("./routes/Workouts.routes");
require("dotenv").config();
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/user",userRouter)
app.use("/workouts",workoutsRouter)

//Home Page
app.get("/", async (req, res) => {
  res.status(200).send("Home Page");
});

//protected routes
// app.use(auth);
// app.use("/notes", notesRouter);

//server
app.listen(process.env.port || 3000, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    console.log("Something went wrong while connecting to DB");
  }
  console.log(`Server running at ${process.env.port || 3000}`);
});