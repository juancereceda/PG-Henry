const User = require("../models/User");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "autocinehenry@gmail.com", // generated ethereal user
    pass: "ykxotzanjxikdvjt", // generated ethereal password
  },
});

const signUp = async (req, res) => {
  try {
    const { username, email, password, profilePic } = req.body;
    let userByEmail = await User.findOne({ email });
    let token;
    if (userByEmail) {
      await User.findOneAndUpdate(
        { email },
        { username, password: await User.hashPassword(password), profilePic }
      );
      token = await jwt.sign({ id: userByEmail._id }, "group8", {
        expiresIn: 86400,
      });
    } else {
      let newUser = await new User({
        username,
        email,
        password: await User.hashPassword(password),
        isAdmin: false,
        bookings: [],
        banned: false,
        resetPassword: false,
        profilePic,
      });
      let userSaved = await newUser.save();
      token = await jwt.sign({ id: userSaved._id }, "group8", {
        expiresIn: 86400,
      });
    }

    res.status(201).send({ token, username, email });
  } catch (error) {
    console.log(error);
  }
};

const logIn = async (req, res) => {
  try {
    const { name } = req.body;
    let user =
      (await User.findOne({ email: name })) ||
      (await User.findOne({ username: name }));
    if (!user) {
      res.status(400).json({ message: "That account, does not exists" });
    } else {
      const token = jwt.sign({ id: user._id }, "group8", {
        expiresIn: 86400,
      });

      res
        .status(200)
        .json({ token, email: user.email, username: user.username });
    }
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  let users;
  let { name } = req.query;

  try {
    if (name) {
      users = await User.find({ username: name });
      return res.status(200).send(users);
    } else {
      users = await User.find();
      res.send(users);
    }
  } catch (error) {
    res.json({ error: "Username not found" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userFoundByParam = await User.findById(id);
    const userFoundByToken = await User.findById(req.userId);
    if (id === req.userId || userFoundByToken.isAdmin) {
      return res.json(userFoundByParam);
    }
    return res.status(403).send({ message: "Unauthorized" });
  } catch (error) {
    console.log(error);
  }
};

const verifyAdmin = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const decoded = await jwt.verify(token, "group8");
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).send({ message: "no user found" });
    } else {
      return res.send({ isAdmin: user.isAdmin });
    }
  } catch (error) {
    console.log(error);
  }
};

const putUser = async (req, res) => {
  try {
    const { username, email, isAdmin, banned, resetPassword } = req.body;

    let newUser = {
      username,
      email,
      isAdmin,
      banned,
      resetPassword,
      bookings: [],
    };

    let user = await User.findByIdAndUpdate(req.params.id, newUser);

    if (resetPassword) {
      transporter.sendMail({
        from: '"AutoCine Henry 🎥" <autocinehenry@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "Autocinema Henry has reset your password", // Subject line
        html: `
        <h4>Autocinema Henry has reset your password, in order to keep your account security</h4>
        <span>Here is the link to restore your <a href="http://localhost:3000/restorepassword">password</a></span>
        <br/><br/>All rights reserved by &copy; <a href="http://localhost:3000">Autocinema App</a></p>
        `, // html body
      });
    }
    res.json({ status: "User Updated" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getBookings = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.send(user.bookings);
  } catch (error) {
    console.log(error);
  }
};

const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const userFound = await User.findById(req.userId);
    const foundByUser =
      userFound && userFound.bookings.find((el) => el.id === id);
    if (foundByUser) {
      return foundByUser.status === "approved"
        ? res.send({
            ...foundByUser,
            email: userFound.email,
            username: userFound.username,
          })
        : res
            .status(400)
            .send({ message: "This payment has not been approved" });
    } else if (userFound.isAdmin) {
      const allUsers = await User.find();
      const foundByAdmin = allUsers.find((user) =>
        user.bookings.find((el) => el.id === id)
      );
      const bookingFound =
        foundByAdmin && foundByAdmin.bookings.find((el) => el.id === id);
      return bookingFound.status === "approved"
        ? res.send({
            ...bookingFound,
            email: foundByAdmin.email,
            username: foundByAdmin.username,
          })
        : res
            .status(400)
            .send({ message: "This payment has not been approved" });
    }
    return res.status(404).send({ message: "No booking found" });
  } catch (error) {
    return res.status(404).send({ message: "No booking found" });
  }
};

const verifyUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, "group8", {
        expiresIn: 86400,
      });
      transporter.sendMail({
        from: '"AutoCine Henry 🎥" <autocinehenry@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "Restore password", // Subject line
        html: `
        <h4>Here is the token to restore your password: </h4>
        <h5>${token}</h5>
        <br/><br/>All rights reserved by &copy; <a href="https://www.google.com.ar">Autocinema App</a></p>
        `, // html body
      });
      return res.send({
        message: "Email sent",
      });
    } else {
      return res.send({ message: "No user with the email provided" });
    }
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = async (req, res) => {
  try {
    const token = req.body.token;
    const decoded = await jwt.verify(token, "group8");
    const user = await User.findById(decoded.id);
    if (user) {
      return res.send({ message: "Token is valid" });
    }
  } catch (error) {
    return res.send({ message: "Token invalid" });
  }
};

const restorePassword = async (req, res) => {
  try {
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(
        req.body.password
      )
    ) {
      return res.json({
        message:
          "The password must have at least 10 caracters, one uppercase letter, one lowercase letter and one of the following characters @$!%*?&",
      });
    }
    let user = await User.findByIdAndUpdate(req.userId, {
      password: await User.hashPassword(req.body.password),
      resetPassword: false,
    });
    if (user) {
      return res.send({ message: "Password restored" });
    } else {
      return res.send({ message: "Couldn't update" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUserAccount = async (req, res) => {
  const userById = await User.findByIdAndDelete(req.userId);
  res.status(200).json({ message: "Account Deleted" }); //no es necesario que le coloqué algo en el json,pero se lo podemos enviar.
};

module.exports = {
  signUp,
  logIn,
  getUsers,
  getUserById,
  verifyAdmin,
  putUser,
  getBookings,
  getBookingById,
  verifyUser,
  verifyToken,
  restorePassword,
  deleteUserAccount,
};
