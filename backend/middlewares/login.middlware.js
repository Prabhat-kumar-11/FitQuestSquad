const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/User.model");
require("dotenv").config();
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //finding user in database with the help of email
    const user = await UserModel.findOne({ email });
    if (user) {
      //comparing the hashed password
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            //attaching userId of user as author ID and its name to token
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              data: {
                authorID: user._id,
                author: user.name,
              },
            },
            process.env.secretKey
          );
          res.status(200).send({
            msg: "Login Successfull",
            token,
            user: user.name,
          });
        } else {
          res.status(401).send({
            err: err,
            msg: "Invalid Credentials",
          });
        }
      });
    } else {
      res.status(404).send({ msg: "User Does Not Exist" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
module.exports = { login };
