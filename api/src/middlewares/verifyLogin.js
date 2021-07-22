const User = require("../models/User");

const checkUser = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    const user =
      (await User.findOne({ email: name })) ||
      (await User.findOne({ username: name }));
    if (!user) {
      return (
        res
          // .status(404)
          .json({ message: "Invalid username or email" })
      );
    }
    if (user.banned) {
      return res.json({
        message: "You have been banned due to inappropiate behaviour",
      });
    }
    if (user.resetPassword) {
      return res.json({
        message: "Your Password has been reset to protect your account, you'll be redirected to restore your password",
      });
    }

    const isValidPassword = await user.validatePassword(
      password,
      user.password
    );

    if (!isValidPassword) {
      return (
        res
          // .status(401)
          .json({ message: "Invalid Password" })
      );
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  checkUser,
};
