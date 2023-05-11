const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/User.model");
const { login } = require("../middlewares/login.middlware");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  //logic
  const { email, password, age, name } = req.body;

  try {
    //hashing password
    bcrypt.hash(password, 5, async (err, hash) => {
      if (hash) {
        const user = new UserModel({ name, age, email, password: hash });
        await user.save();
        res.status(200).send({ msg: "New User has been registered" });
      } else {
        res.status(400).send(err);
      }
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
userRouter.post("/login", login);
module.exports = { userRouter };
