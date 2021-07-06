const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let newUser = await new User({ username, email, password });
    let userSaved = await newUser.save();
    res.status(201).send(userSaved);
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  getUsers,
};
