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
    const { username, email, password } = req.body;
    let userByEmail = await User.findOne({ email });
    let token;
    if (userByEmail) {
      await User.findOneAndUpdate(
        { email },
        { username, password: await User.hashPassword(password) }
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
    const token = jwt.sign({ id: user._id }, "group8", {
      expiresIn: 86400,
    });

    res.status(200).json({ token, email: user.email, username: user.username });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  let users;
  let { name } = req.query;
  //console.log(name)

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
    const userFound = await User.findById(id);
    return res.json(userFound);
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
    const { username, email, isAdmin, banned } = req.body;

    let newUser = {
      username,
      email,
      isAdmin,
      banned,
      bookings: [],
    };
    await User.findByIdAndUpdate(req.params.id, newUser);
    //console.log(newUser);
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

module.exports = {
  signUp,
  logIn,
  getUsers,
  getUserById,
  verifyAdmin,
  putUser,
  getBookings,
  verifyUser,
  verifyToken,
  restorePassword,
};
