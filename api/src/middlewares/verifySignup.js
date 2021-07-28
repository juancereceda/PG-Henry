const User = require("../models/User");
const CLIENT_ID =
  "901553802516-s4lqslbl590f3bq5bklbgql27p4ktcqe.apps.googleusercontent.com";
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(CLIENT_ID);

const checkEmailAndPassword = async (req, res, next) => {
  const existingUsername = await User.findOne({ username: req.body.username });
  const existingEmail = await User.findOne({ email: req.body.email });
  // console.log(existingEmail);

  try {
    if (existingUsername)
      return res
        .status(400)
        .json({ message: "the username already exists, change it" });

    if (
      !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        req.body.email
      )
    ) {
      return res.status(400).json({ message: "the input email is incorrect" });
    }
    if (existingEmail) {
      return res.status(400).json({ message: "the input email already exits" });
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(
        req.body.password
      )
    ) {
      return res.status(400).json({
        message:
          "the password must has at least 10 caracters, one Uppercase Letter, one Lowercase letter and one @$!%*?&",
      });
    } else {
      next();
      return;
    }
  } catch (err) {
    console.log(error);
  }
};

const verifyGoogleToken = async (req, res, next) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    if (!ticket) {
      return res
        .status(404)
        .send({ message: "The token provided is not valid" });
    }
    const payload = ticket.getPayload();
    console.log(payload);
    req.body.username = payload.name;
    req.body.email = payload.email;
    req.body.name = payload.email;
    req.body.password = `Google!!${payload.sub}&&`;
    req.body.profilePic = payload.picture;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  checkEmailAndPassword,
  verifyGoogleToken,
};
